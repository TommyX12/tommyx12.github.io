/*
TODO:
    maybe remove contact listener when destroying body?
*/


var box2d_time_step;
var box2d_vel_iterations;
var box2d_pos_iterations;

var box2d_world;
var pixels_per_meter = 100;

var box2d_module;

function to_meter(value) {
    return value / pixels_per_meter;
}

function to_pixel(value) {
    return value * pixels_per_meter;
}

function deg(rad) {
    return rad / Math.PI * 180;
}

function rad(deg) {
    return deg / 180 * Math.PI;
}

function create_box2d(Box2D, gravity_x, gravity_y, fps, position_iterations, velocity_iterations) {
    if (fps === undefined) fps = 60.0;
    if (position_iterations === undefined) position_iterations = 8;
    if (velocity_iterations === undefined) velocity_iterations = 3;
    box2d_module = Box2D;
    var gravity = new box2d_module.b2Vec2(to_meter(gravity_x), to_meter(gravity_y));
    box2d_world = new box2d_module.b2World(gravity);
    box2d_time_step = 1.0 / fps;
    box2d_pos_iterations = position_iterations;
    box2d_vel_iterations = velocity_iterations;
    // box2d_world.SetAllowSleeping(false);
    
    /* var listener = new box2d_module.JSContactListener();
    listener.BeginContact = function (contactPtr) {
        var contact = box2d_module.wrapPointer(contactPtr, box2d_module.b2Contact);
        var fixtureA = contact.GetFixtureA();
        var fixtureB = contact.GetFixtureB();
    }

    listener.EndContact = function() {};
    listener.PreSolve = function(contactPtr, oldManifoldPtr) {
        var contact = box2d_module.wrapPointer(contactPtr, box2d_module.b2Contact);
        // console.log(contact.GetManifold().get_localPoint())
        // console.log(contact.GetManifold().get_m_points().get(0).get_m_normalImpulse());
        
        var oldManifold = box2d_module.wrapPointer(oldManifoldPtr, box2d_module.b2Manifold);
        console.log(oldManifold.points);
        // console.log(oldManifold.m_points[0].m_normalImpulse);
    };
    listener.PostSolve = function(contactPtr, impulsePtr) {
        var impulse = box2d_module.wrapPointer(impulsePtr, box2d_module.b2ContactImpulse);
        console.log(impulse.normalImpulses);
    };

    box2d_world.SetContactListener(listener); */
}

function enable_box2d(sprite, x, y, width, height, dynamic, density, friction, bounce) {
    if (dynamic === undefined) dynamic = true;
    if (density === undefined) density = 1.0;
    if (friction === undefined) friction = 0.5;
    if (bounce === undefined) bounce = 0.25;
    var box2d_body = {
        body: null,
        
        get_x: function () {
            return to_pixel(box2d_body.body.GetPosition().get_x());
        },
        
        get_y: function () {
            return to_pixel(box2d_body.body.GetPosition().get_y());
        },
        
        set_x: function (value) {
            var position = box2d_body.body.GetPosition();
            position.set_x(to_meter(value));
            box2d_body.body.SetTransform(position, box2d_body.body.GetAngle());
            return value;
        },
        
        set_y: function (value) {
            var position = box2d_body.body.GetPosition();
            position.set_y(to_meter(value));
            box2d_body.body.SetTransform(position, box2d_body.body.GetAngle());
            return value;
        },
        
        get_velocity_x: function () {
            return to_pixel(box2d_body.body.GetLinearVelocity().get_x());
        },
        
        get_velocity_y: function () {
            return to_pixel(box2d_body.body.GetLinearVelocity().get_y());
        },
        
        set_velocity_x: function (value) {
            var velocity = box2d_body.body.GetLinearVelocity();
            velocity.set_x(to_meter(value));
            box2d_body.body.SetLinearVelocity(velocity);
            return value;
        },
        
        set_velocity_y: function (value) {
            var velocity = box2d_body.body.GetLinearVelocity();
            velocity.set_y(to_meter(value));
            box2d_body.body.SetLinearVelocity(velocity);
            return value;
        },
        
        set_collision: function (value) {
            box2d_body.body.GetFixtureList().SetSensor(!value);
            return value;
        },
        
        test_point: function (x, y) {
            return box2d_body.body.GetFixtureList().TestPoint(new box2d_module.b2Vec2(to_meter(x), to_meter(y)));
        },
        
        get_angle: function (value) {
            return deg(box2d_body.body.GetAngle());
        },
        
        set_angle: function (value) {
            box2d_body.body.SetTransform(box2d_body.body.GetPosition(), rad(value));
            return value;
        },
        
        update: function () {
            var position = box2d_body.body.GetPosition();
            var angle = box2d_body.body.GetAngle();
            sprite.x = to_pixel(position.get_x());
            sprite.y = to_pixel(position.get_y());
            sprite.angle = deg(angle);
        },
        
        destroy: function () {
            box2d_world.DestroyBody(box2d_body.body);
        },
    };
    
    sprite.anchor.set(0.5);
    sprite.width = width;
    sprite.height = height;
    
    var body_def = new box2d_module.b2BodyDef();
    if (dynamic) body_def.set_type(box2d_module.b2_dynamicBody);
    body_def.get_position().Set(to_meter(x), to_meter(y));
    box2d_body.body = box2d_world.CreateBody(body_def);
    
    var box = new box2d_module.b2PolygonShape();
    box.SetAsBox(to_meter(width / 2), to_meter(height / 2));
    
    var fixture_def = new box2d_module.b2FixtureDef();
    
    /* var verts = [];
    verts.push(new box2d_module.b2Vec2(7,-1));
    verts.push(new box2d_module.b2Vec2(8,-2));
    verts.push(new box2d_module.b2Vec2(9, 3));
    verts.push(new box2d_module.b2Vec2(7, 1));
    var polygonShape = createPolygonShape(verts);
    fixture_def.set_shape(polygonShape); */
    
    fixture_def.set_shape(box);
    fixture_def.set_density(density);
    fixture_def.set_friction(friction);
    fixture_def.set_restitution(bounce);
    
    box2d_body.body.CreateFixture(fixture_def);
    
    sprite.box2d_body = box2d_body;
    sprite.box2d_body.update();
    
    sprite.events.onDestroy.add(box2d_body.destroy, this);
    
    sprite.update = function () {
        sprite.box2d_body.update();
    }
}

function update_box2d() {
    box2d_world.Step(box2d_time_step, box2d_vel_iterations, box2d_pos_iterations);
}
    
//Having to type 'Box2D.' in front of everything makes porting
//existing C++ code a pain in the butt. This function can be used
//to make everything in the Box2D namespace available without
//needing to do that.
function using(ns, pattern) {    
    if (pattern == undefined) {
        // import all
        for (var name in ns) {
            this[name] = ns[name];
        }
    } else {
        if (typeof(pattern) == 'string') {
            pattern = new RegExp(pattern);
        }
        // import only stuff matching given pattern
        for (var name in ns) {
            if (name.match(pattern)) {
                this[name] = ns[name];
            }
        }       
    }
}
    

//to replace original C++ operator =
function copyVec2(vec) {
    return new box2d_module.b2Vec2(vec.get_x(), vec.get_y());
}

//to replace original C++ operator * (float)
function scaleVec2(vec, scale) {
    vec.set_x( scale * vec.get_x() );
    vec.set_y( scale * vec.get_y() );            
}

//to replace original C++ operator *= (float)
function scaledVec2(vec, scale) {
    return new box2d_module.b2Vec2(scale * vec.get_x(), scale * vec.get_y());
}


// http://stackoverflow.com/questions/12792486/emscripten-bindings-how-to-create-an-accessible-c-c-array-from-javascript
function createChainShape(vertices, closedLoop) {
    var shape = new box2d_module.b2ChainShape();            
    var buffer = box2d_module.allocate(vertices.length * 8, 'float', box2d_module.ALLOC_STACK);
    var offset = 0;
    for (var i=0;i<vertices.length;i++) {
        box2d_module.setValue(buffer+(offset), vertices[i].get_x(), 'float'); // x
        box2d_module.setValue(buffer+(offset+4), vertices[i].get_y(), 'float'); // y
        offset += 8;
    }            
    var ptr_wrapped = box2d_module.wrapPointer(buffer, box2d_module.b2Vec2);
    if ( closedLoop )
        shape.CreateLoop(ptr_wrapped, vertices.length);
    else
        shape.CreateChain(ptr_wrapped, vertices.length);
    return shape;
}

function createPolygonShape(vertices) {
    var shape = new box2d_module.b2PolygonShape();
    // var buffer = box2d_module.allocate(vertices.length * 8, 'float', box2d_module.ALLOC_STACK);
    var buffer = box2d_module._malloc(vertices.length * 8);
    var offset = 0;
    for (var i = 0; i < vertices.length; i++) {
        // box2d_module.setValue(buffer + (offset), vertices[i].get_x(), 'float'); // x
        box2d_module.HEAPF32[buffer + offset >> 2] = vertices[i].get_x();
        // box2d_module.setValue(buffer + (offset + 4), vertices[i].get_y(), 'float'); // y
        box2d_module.HEAPF32[buffer + (offset + 4) >> 2] = vertices[i].get_y();
        offset += 8;
    }
    var ptr_wrapped = box2d_module.wrapPointer(buffer, box2d_module.b2Vec2);
    shape.Set(ptr_wrapped, vertices.length);
    return shape;
}

function createRandomPolygonShape(radius) {
    var numVerts = 3.5 + Math.random() * 5;
    numVerts = numVerts | 0;
    var verts = [];
    for (var i = 0; i < numVerts; i++) {
        var angle = i / numVerts * 360.0 * 0.0174532925199432957;
        verts.push( new b2Vec2( radius * Math.sin(angle), radius * -Math.cos(angle) ) );
    }            
    return createPolygonShape(verts);
}
