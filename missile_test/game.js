
function start_game() {
	
    var wind_d = {x: 1, y: 1};
    
    function Agent(texture_name) {
        var self = agent_group.create(0, 0, texture_name);
        
        self.anchor.set(0.5);
        self.scale.set(0.75);
        
        var speed = 10
        
        self.update = function () {
            if (input_manager.is_key_holding(Phaser.KeyCode.W)) {
                self.y -= speed
            }
            if (input_manager.is_key_holding(Phaser.KeyCode.S)) {
                self.y += speed
            }
            if (input_manager.is_key_holding(Phaser.KeyCode.A)) {
                self.x -= speed
            }
            if (input_manager.is_key_holding(Phaser.KeyCode.D)) {
                self.x += speed
            }
        }
        
        return self
    }
    
	function Trail(x1, y1, x2, y2, size, texture, life) {
		var self = trail_pool.get_new();
		
		x1 += wind_d.x;
		y1 += wind_d.y;
		
		self.loadTexture(texture);
		self.anchor.set(0.5);
		self.x = (x1 + x2) / 2;
		self.y = (y1 + y2) / 2;
		self.width = dist(x1, y1, x2, y2);
		self.height = size;
		self.angle = deg(xy_to_angle(x2 - x1, y2 - y1));
		
		self.life = life;
		self.total_life = life;
		
		self.update = function () {
			if (!self.exists) return;
			
			if (self.life <= 0) {
				self.kill();
				return;
			}
			
			self.x += wind_d.x;
			self.y += wind_d.y;
			
			self.alpha = self.life / self.total_life;
			self.life -= game.time.physicsElapsed;
		}
		
		return self;
	}
	
	function Vec2D(x, y) {
	    this.x = x
        this.y = y
	}
	
	Object.assign(Vec2D, {
        from_angle: function (angle, magnitude) {
            return new Vec2D(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude)
        },
        from_rand_angle: function (min_magnitude, max_magnitude) {
            var magnitude = random_range(min_magnitude, max_magnitude)
            return Vec2D.from_angle(Math.random() * Math.PI * 2, magnitude)
        },
	})
	
	Vec2D.prototype = Object.assign({}, {
        copy: function () {
            return new Vec2D(this.x, this.y)
        },
        copy_from: function (v) {
            this.x = v.x
            this.y = v.y
        },
        
        add: function (v) {
            return new Vec2D(this.x + v.x, this.y + v.y)
        },
        sub: function (v) {
            return new Vec2D(this.x - v.x, this.y - v.y)
        },
        mul: function (c) {
            return new Vec2D(this.x * c, this.y * c)
        },
        add_self: function (v) {
            this.x += v.x
            this.y += v.y
            return this
        },
        sub_self: function (v) {
            this.x -= v.x
            this.y -= v.y
            return this
        },
        mul_self: function (c) {
            this.x *= c
            this.y *= c
            return this
        },
        
        lerp: function (v, c) {
            return new Vec2D(this.x + (v.x - this.x) * c, this.y + (v.y - this.y) * c)
        },
        lerp_self: function (v, c) {
            this.x = this.x + (v.x - this.x) * c
            this.y = this.y + (v.y - this.y) * c
            return this
        },
	})
	
	function Missile(from, to) {
        var self = trail_pool.get_new()
        
        var t = 0.0
        var dt = 0.02
        
        var pos = from.copy()
        var last_pos = pos.copy()
        var from = from.copy()
        var to = to.copy()
        
        var p1 = from.lerp(to, 0.33).add_self(Vec2D.from_rand_angle(100, 300))
        var p2 = from.lerp(to, 0.5).add_self(Vec2D.from_rand_angle(100, 300))
        
        self.alpha = 0
        
        self.update = function () {
            if (!self.exists) {
                return
            }
            
            t += dt
            bezier_cubic(t, from, p1, p2, to, pos)
            
            Trail(last_pos.x, last_pos.y, pos.x, pos.y, 10, 'trail', 0.5)
            last_pos.copy_from(pos)
            
            if (t > 1) {
                self.kill()
            }
        }
        
        return self
	}
	
	var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});
	
	var cursors;
	
	var input_manager;
	
    var agent_group;
    
	var trail_pool;
	
	var agent
	
	function preload() {
		game.load.image('block', 'images/block.png');
		game.load.image('platform', 'images/platform.png');
		game.load.image('player', 'images/player.png');
		game.load.image('star', 'images/star.png');
		game.load.image('crosshair', 'images/crosshair.png');
		game.load.image('arrow', 'images/arrow.png');
		game.load.image('bullet', 'images/bullet.png');
		game.load.image('bullet2', 'images/bullet2.png');
		game.load.image('missile', 'images/missile.png');
		game.load.image('missile2', 'images/missile2.png');
		game.load.image('particle', 'images/particle.png');
		game.load.image('particle2', 'images/particle2.png');
		game.load.image('explosion', 'images/explosion.png');
		game.load.image('explosion2', 'images/explosion2.png');
		game.load.image('icon_base', 'images/icon_base.png');
		game.load.image('assault_rifle_icon', 'images/assault_rifle_icon.png');
		game.load.image('shotgun_icon', 'images/shotgun_icon.png');
		game.load.image('sniper_icon', 'images/sniper_icon.png');
		game.load.image('dual_missile_icon', 'images/dual_missile_icon.png');
		game.load.image('missile_salvo_icon', 'images/missile_salvo_icon.png');
		game.load.image('cluster_missile_icon', 'images/cluster_missile_icon.png');
		game.load.image('electric_shock_icon', 'images/electric_shock_icon.png');
		game.load.image('trail', 'images/trail.png');
		game.load.image('trail2', 'images/trail2.png');
		
		game.load.bitmapFont('gem', 'fonts/gem.png', 'fonts/gem.xml');
	}
	
	function create() {
		input_manager = InputManager(game);

		game.stage.backgroundColor = '#333333';
		
		cursors = game.input.keyboard.createCursorKeys();

        agent_group = game.add.group();
        trail_pool = SpritePool(game, 128, null);
        
        agent = Agent('player')
	}
	
	function update() {
		input_manager.update()
		if (input_manager.is_mouse_pressed_once()) {
		    Missile(
                new Vec2D(agent.x, agent.y),
                new Vec2D(game.input.mousePointer.x, game.input.mousePointer.y),
		    )
		}
	}
	
}
