colorscheme desert

:let mapleader = ","

syntax on

set softtabstop=4
set shiftwidth=4
set tabstop=4
set expandtab
set autoindent
set smartindent
set smarttab

set ignorecase " case insensitive search
set smartcase " If there are uppercase letters, become case-sensitive.
set incsearch " live incremental searching
set showmatch " live match highlighting
set hlsearch " highlight matches
set gdefault " use the `g` flag by default.

set number

" set spell spelllang=en_us

noremap <C-c> "*y
inoremap jk <space><backspace><esc>
inoremap jp <C-p>
inoremap j[ <C-x><C-p>
inoremap jl <C-w>
inoremap j; <end>
inoremap ^? <backspace>
cnoremap ^? <backspace>
noremap k gk
noremap j gj
noremap gG G
map H 8h
map L 8l
map K 5k
map J 5j
noremap G ^
noremap : $
noremap ; :
nnoremap U <C-r>

vnoremap . :norm! .<cr>

vnoremap <silent> * :<C-U>
\let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
\gvy/<C-R><C-R>=substitute(
\escape(@", '/\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
\gV:call setreg('"', old_reg, old_regtype)<CR>gv
vnoremap <silent> # :<C-U>
\let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
\gvy?<C-R><C-R>=substitute(
\escape(@", '?\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
\gV:call setreg('"', old_reg, old_regtype)<CR>gv

nnoremap <leader>j J

noremap <space> /\V
noremap <S-space> ?\V

filetype plugin on
set omnifunc=syntaxcomplete#Complete

match Operator "[^a-zA-Z0-9 \t]"

noremap <leader>wv <C-w>v
noremap <leader>wh <C-w>s

nnoremap <leader><space> :noh<cr>
