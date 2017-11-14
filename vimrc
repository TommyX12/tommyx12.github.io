set nocompatible

filetype plugin indent on
syntax on

colorscheme desert
set background=dark

autocmd VimEnter * match NonWord "[^a-zA-Z0-9\t ]"
autocmd WinNew * match NonWord "[^a-zA-Z0-9\t ]"

let mapleader = ","

" set cursorline

" disable showing --INSERT-- etc
set noshowmode

" set custom spelling file location
" set spellfile=$VIM/vimfiles/spell/en.utf-8.add

" keep some line above and below cursor
set scrolloff=10

" jump when scroll at border instead of line by line
set scrolljump=2

" update time
set updatetime=1000

" disable cursor blinking in normal mode
" set guicursor+=n:blinkon0

" disable line break
set textwidth=0
set wrapmargin=0
set formatoptions=roqnMj

" set tab indent guide
set listchars=tab:\|\ ,extends:>,precedes:< 
set list

" omni completion
set omnifunc=syntaxcomplete#Complete

" faster syntax highlighting
syntax sync minlines=256

" wrap indent
set wrap
set breakindent
set breakindentopt=shift:2
set showbreak=..

" misc settings
set tabstop=4
set shiftwidth=4
set softtabstop=4
" set softtabstop=1
set expandtab " use spaces instead of tabs.
set smarttab " let's tab key insert 'tab stops', and backspace deletes tabs.
set shiftround " tab / shifting moves to closest tab stop.
set autoindent " Match indents on new lines.
set copyindent " Copy existing indent char when auto indenting
set smartindent " Intelligently un-indent / indent new lines based on rules.

" use temp folder for backup, undo and swap files
" the // is there to make sure temp files are stored with absolute path so
" no conflict
set undodir=~/vim/temp//
set directory=~/vim/temp//
set backupdir=~/vim/temp//

" timeout on waiting for command
set timeoutlen=750

" We have VCS -- we don't need this stuff.
" set nobackup " We have vcs, we don't need backups.
" set nowritebackup " We have vcs, we don't need backups.
" set noswapfile " They're just annoying. Who likes them?

" don't nag me when hiding buffers
set hidden " allow me to have buffers with unsaved changes.
set autoread " when a file has changed on disk, just load it. Don't ask.

" use utf-8 by default
set encoding=utf-8

" Make search more sane
set ignorecase " case insensitive search
set smartcase " If there are uppercase letters, become case-sensitive.
set incsearch " live incremental searching
set showmatch " live match highlighting
set hlsearch " highlight matches
set gdefault " use the `g` flag by default.

" do not redraw when executing macro etc
set lazyredraw

" allow the cursor to go anywhere in visual block mode.
set virtualedit+=block

" always display status line
set laststatus=2

" line numbering
set number
set norelativenumber

" enable spellcheck
" set spell spelllang=en_us

" disable jumping to matching bracket when inserting
set noshowmatch

" enable system clipboard
" set clipboard=unnamed

" enhance completion 
set completeopt=longest,menuone

" disable printing random shit when completing 
set shortmess+=aoOc

set showtabline=2

" disable beep
" set noeb vb t_vb=
" autocmd GUIEnter * set vb t_vb=

" disable toolbar
" set guioptions-=T

" enhance completion
" inoremap <expr> <tab> pumvisible() ? "\<C-y>" : "\<C-g>u\<tab>"

" fast context completion
inoremap <C-space> <C-x><C-p>
inoremap <C-S-space> <C-x><C-l>

" fix spelling. F fix previous one.
nnoremap <leader>f 1z=
vnoremap <leader>f 1z=
nnoremap <leader>F [s1z=<C-o>

" Open and indent
nnoremap <leader>o o<space><backspace><esc>k$
nnoremap <leader>O O<space><backspace><esc>j$
nnoremap <leader><C-o> o<space><backspace><esc>kO<space><backspace><esc>j$

" better { } navigation
nnoremap [[ ?{<CR>w99[{
nnoremap ][ /}<CR>b99]}
nnoremap ]] j0[[%/{<CR>
nnoremap [] k$][%?}<CR>

" remove excess white space
vnoremap <leader>rws :s/\%V\ \+/ <cr>:noh<cr>

" Clear line
nnoremap <leader>d ^D

" execute last command
noremap <leader>. @:

" open command line at file location
" nnoremap <leader>; :!start cmd /k cd %:p:h<cr>

" open explorer at file location
" nnoremap <leader>: :!start Explorer /select,%:p<CR>

" move cursor to comfortable reading position
nnoremap <leader>z :norm! zt1<C-y><cr>

" move cursor to comfortable reading position when pressing enter in insert
" and when entering insert mode
" autocmd InsertEnter * silent! call EnterInsert()
" autocmd InsertLeave * silent! call ExitInsert()
inoremap <silent> <cr> <space><backspace><cr><space><backspace><C-o>:norm! zz<cr>

" map - and = decrease and increase numbers. 
noremap = <C-a>
noremap - <C-x>
vnoremap + g<C-a>
vnoremap _ g<C-x>

" easy window sizing
nnoremap _ <C-w>-
nnoremap + <C-w>+
nnoremap < <C-w><
nnoremap > <C-w>>

" follow symbol under cursor use tj instead of default
noremap <C-]> g<C-]>

" ctrl up and down to move page
nnoremap <C-up> <C-y>
nnoremap <C-down> <C-e>

" ctrl a select all
nnoremap <C-a> ggVG

" open ctrlp file finder with ctrl-t enter
nnoremap <C-t> :CtrlP

" open ctrlp line finder with ctrl-f
" nnoremap <C-f> :CtrlPLine<cr>

" open ctrlp to look for buffer
nnoremap <C-b> :CtrlPBuffer<cr>

" So we don't have to press shift when we want to get into command mode.
noremap ; :

" use ! for :!
noremap ! :!

" shift-u redo
nnoremap U <C-r>

" paste with indent
nnoremap p ]p
nnoremap <S-p> ]P
" vnoremap p ]p
" vnoremap <S-p> ]P

" toggle relative number display with ctrl-n
" noremap <C-n> :set relativenumber!<cr>

" ctrl-backspace delete last word in insert mode
inoremap <C-backspace> <C-w>

" ctrl-z undo in insert mode
" inoremap <C-z> <esc>ua

" ctrl-s save
command -nargs=0 -bar Update if &modified 
\|    if empty(bufname('%'))
\|        browse confirm write
\|    else
\|        confirm write
\|    endif
\|endif
nnoremap <C-s> :<C-u>Update<cr>
inoremap <C-s> <space><backspace><esc>:<C-u>Update<cr>a

" leader-ctrl-s save all
nnoremap <leader><C-s> :wa<cr>

" leader re restore session
" nnoremap <leader>re :OpenSession! default<cr>:WToggleFullscreen<cr>:WToggleFullscreen<cr> 
" nnoremap <leader>re :WToggleFullscreen<cr>:OpenSession! default<cr>:WToggleFullscreen<cr>:WToggleFullscreen<cr> 

" leader se open session
" nnoremap <leader>se :OpenSession!<cr>

" toggle fullscreen
" nnoremap <C-cr> :WToggleFullscreen<cr>

" system clipboard copy and paste using ctrl-c and ctrl-v
noremap <C-c> "*y
inoremap <C-v> <space><backspace><esc>"*]pa
" vnoremap <C-v> <esc>"*]p

" buffer creation and navigation
nnoremap <leader>t :enew<cr>
nnoremap <leader>q :BD<cr>
nnoremap <leader>Q :BD!<cr>
nnoremap <C-tab> :bnext<cr>
nnoremap <C-S-tab> :bprevious<cr>

" Use jk to leave insert mode and command line mode.
inoremap jk <space><backspace><esc>
inoremap jj j
inoremap JJ J
imap Jk jk
imap JK jk
cnoremap jk <C-c>
" Use shift-space to execute command, and clear match
cnoremap <S-space> <cr>:noh<cr>
cnoremap <C-n> \.\*

" Use jp to quickly select completion in insert mode
imap jp <C-n>
imap j1 <C-n>
imap j2 <C-n><C-n>
imap j3 <C-n><C-n><C-n>
imap j4 <C-n><C-n><C-n><C-n>
imap j5 <C-n><C-n><C-n><C-n><C-n>
imap j6 <C-n><C-n><C-n><C-n><C-n><C-n>
imap j7 <C-n><C-n><C-n><C-n><C-n><C-n><C-n>
imap j8 <C-n><C-n><C-n><C-n><C-n><C-n><C-n><C-n>
imap j9 <C-n><C-n><C-n><C-n><C-n><C-n><C-n><C-n><C-n>
imap j0 <C-n><C-n><C-n><C-n><C-n><C-n><C-n><C-n><C-n><C-n>


" Use jl to delete last word entered in insert mode
inoremap jl <C-w>
cnoremap jl <C-w>

" Use j; to move cursor to end of line in insert mode
inoremap j; <end>

" use jf to type \ quickly.
inoremap jf \
cnoremap jf \

" use jt to insert TODO
inoremap jt TODO

" use j<tab> to insert \t
inoremap j<tab> <C-v>009


" join line with with ,j
noremap <leader>j J
" join line with comma with ,J
nnoremap <leader>J A,<esc>J

" split line with ,k
nnoremap <leader>k i<cr><esc>l
nnoremap <leader>K :s/,\s*/\r<cr>

" Smart auto close brackets
" inoremap ( ()<left>
" inoremap () ()
inoremap (<cr> (<cr><space><backspace><esc>o)<esc>kI
" inoremap [ []<left>
" inoremap [] []
inoremap [<cr> [<cr><space><backspace><esc>o]<esc>kI
" inoremap { {}<left>
" inoremap {} {}
inoremap {<cr> {<cr><space><backspace><esc>o}<esc>kI
" inoremap < <><left>
" inoremap <> <>
" inoremap " ""<left>
" inoremap "" ""

" Stuff $ for latex file.
" autocmd FileType tex inoremap <buffer> $ $$<left>
" autocmd FileType tex,sptex inoremap <buffer> $$<cr> $$<cr><space><backspace><esc>o$$<esc>kI
" autocmd FileType tex,sptex vmap <buffer> $ S$
" autocmd FileType tex,sptex nmap <buffer> $ vS$

" set indent settings for java and json files
autocmd FileType java setlocal tabstop=2 shiftwidth=2 softtabstop=2 expandtab
autocmd FileType json setlocal tabstop=2 shiftwidth=2 softtabstop=2 expandtab
autocmd FileType html setlocal tabstop=2 shiftwidth=2 softtabstop=2 expandtab

" set indent settings for notes
" autocmd FileType lpp setlocal expandtab

" split window vertically and horizontally
noremap <leader>wv <C-w>v
noremap <leader>wh <C-w>s

" Y copy to end of line
noremap Y y$

" go to start and end of sentense more quickly
" nnoremap <leader>h ^
" vnoremap <leader>h ^
" nnoremap <leader>l $
" vnoremap <leader>l $

" move up and down more quickly
" nnoremap <leader>k 6gk
" nnoremap <leader>j 6gj
" vnoremap <leader>k 6gk
" vnoremap <leader>j 6gj

" quickly re-size window vertically and horizontally
nnoremap <leader>wsh :res<space>
nnoremap <leader>wsv :vert res<space>
nnoremap <leader>wsV :vert res 30<cr>

" close window with ,wq
" nnoremap <leader>wq <C-w>

" google things with leader g
nnoremap <leader>g :Google<space>
vnoremap <leader>g :Google<cr>

" swap last deleted
nnoremap <leader>x v<esc>`.``gvP``P
vnoremap <leader>x <esc>`.``gvP``P

" paste in insert mode with ctrl-b
inoremap <C-b> <C-r><C-p>"
cnoremap <C-b> <C-r>"

" correct last spell when shift-enter in insert mode
inoremap <S-space><S-space> <C-g>u<esc>[s1z=`]a

" open NERDTree
nnoremap <leader>n :NERDTree<cr>
" find current file in nerd tree with ,N
nnoremap <leader>N :NERDTreeFind<cr>

" open TList
" nnoremap <leader>m :TlistOpen<cr>:vert res 30<cr>
nnoremap <leader>m :TagbarClose<cr>:TagbarOpen<cr>

autocmd InsertEnter * silent! exec "norm! " . line(".") . "G" . col(".") . "|"

" bindings for easy split navigation
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" standard movement overhaul

" move more quickly with shift
" Visual line nav, not real line nav
" If you wrap lines, vim by default won't let you move down one line to the
" wrapped portion. This fixes that.
noremap <silent> j gj
noremap <silent> k gk

noremap <silent> H 8h
noremap <silent> L 8l
function! FastLineMoveUp()
    return '5gk'
endfunction
function! FastLineMoveDown()
    return '5gj'
endfunction
noremap <silent> <expr> J FastLineMoveDown()
noremap <silent> <expr> K FastLineMoveUp()
noremap <silent> G ^
noremap <silent> : $
vnoremap <silent> : $h
noremap <silent> gG G

" noremap <silent> <C-h> 10h
" noremap <silent> <C-l> 10l
" noremap <silent> <C-j> 10gj
" noremap <silent> <C-k> 10gk

" binary search movement
" nnoremap <expr> <C-h> BsmL()
" nnoremap <expr> <C-j> BsmD()
" nnoremap <expr> <C-k> BsmU()
" nnoremap <expr> <C-l> BsmR()

" navigation in insert mode with ctrl hjkl
" inoremap <C-h> <Left>
" inoremap <C-j> <Down>
" inoremap <C-k> <Up>
" inoremap <C-l> <Right>

" indent with shift-[ and shift-]
nnoremap { <<
nnoremap } >>
vnoremap { <gv
vnoremap } >gv

" easy mark jumps
let g:fast_mark_total = 3
let g:fast_mark_cur = 1
function! SetFastMark()
    let r = 'm' . g:fast_mark_cur
    let g:fast_mark_cur = (g:fast_mark_cur % g:fast_mark_total) + 1
    return r
endfunction

function! JumpFastMark()
    let g:fast_mark_cur = (g:fast_mark_cur % g:fast_mark_total) + 1
    return '`' . g:fast_mark_cur
endfunction

nnoremap <expr> mm SetFastMark()
nnoremap <expr> M JumpFastMark()
 
" Use sane regex's when searching
"nnoremap / /\V
"nnoremap ? ?\V
"vnoremap / /\V
"vnoremap ? ?\V

" Clear match highlighting
nnoremap <leader><space> :noh<cr>
" :call clearmatches()<cr>

" quit visual mode with ,space
vnoremap <leader><space> <esc>

" use space and shift-space for quick searching.
" the \V makes it use normal words instead of regex 
map <space> /\V
map <S-space> ?\V

" search word under cursor do not jump
nnoremap * *N
nnoremap g* g*N

" use leader s to start replacing, and leader S to start replacing whole document 
nnoremap <leader>s :s/
nnoremap <leader>S :%s/
vnoremap <leader>s :s/\%V
vnoremap <leader>S :s/
nnoremap <leader>*s :s/\<<C-r><C-w>\>/
nnoremap <leader>*S :%s/\<<C-r><C-w>\>/

" generate tag file with ,ut
nnoremap <leader>ut :UpdateTags<cr>

" Search for selected text, forwards or backwards.
vnoremap <silent> * :<C-U>
  \let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
  \gvy/<C-R><C-R>=substitute(
  \escape(@", '/\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
  \gV:call setreg('"', old_reg, old_regtype)<CR>
  \gv
vnoremap <silent> # :<C-U>
  \let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
  \gvy?<C-R><C-R>=substitute(
  \escape(@", '?\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
  \gV:call setreg('"', old_reg, old_regtype)<CR>

" enable applying repeat and macro command to all lines selected in visual mode
vnoremap . :norm! .<cr>
 
" Quick buffer switching - like cmd-tabbing
nnoremap <leader><tab> <c-^>

" use tab in normal mode to replace register key " 
" noremap <tab> "

" use () to jump around brackets etc
function! GotoPrevBracketStart(vis)
    if a:vis == 1
        " execute 'normal! \<esc>'
        normal! gv
    endif
    call search('[([{]', 'bW')
endfunction
function! GotoNextBracketEnd(vis)
    if a:vis == 1
        " execute 'normal! \<esc>'
        normal! gv
    endif
    call search('[)\]}]', 'W')
endfunction

function! JumpWord(b, e)
    call search('[A-Za-z0-9_]\+', 'W' . (a:b==1 ? 'b' : '') . (a:e==1 ? 'e' : ''))
endfunction

nnoremap <silent> ( :call GotoPrevBracketStart(0)<cr>
nnoremap <silent> ) :call GotoNextBracketEnd(0)<cr>
nnoremap <silent> w :call JumpWord(0, 0)<cr>
nnoremap <silent> e :call JumpWord(0, 1)<cr>
nnoremap <silent> b :call JumpWord(1, 0)<cr>
nnoremap <silent> W w
nnoremap <silent> E e
nnoremap <silent> B b
vnoremap <silent> ( :call GotoPrevBracketStart(1)<cr>
vnoremap <silent> ) :call GotoNextBracketEnd(1)<cr>

" folding
set foldmethod=indent
set foldlevel=999
set foldlevelstart=999
set foldcolumn=0
set foldtext=MyFoldText()
" set foldclose=all
set foldopen=hor,insert,jump,mark,search,undo
function! MyFoldText()
    let lines = 1 + v:foldend - v:foldstart
    let ind = indent(v:foldstart)

    let spaces = ''
    let i = 0
    while i < ind
            let i = i+1
            let spaces = spaces . ' '
    endwhile

    return spaces . '+--' . ' ' . lines . ': ' . substitute(getline(v:foldstart), '^\s*', '', '')
endfunction
set fillchars=fold:\ ,vert:\|
" set fillchars=fold:\ 

function! FoldCurrent()
    if foldclosed('.') >= 0
        if &foldlevel > 0
            let &foldlevel = &foldlevel - 1
        endif
    else
        let &foldlevel = foldlevel('.') - 1
    endif
endfunction
nnoremap <expr> Z FoldCurrent()
nnoremap X zR
nnoremap zx :set foldlevel=0<cr>zx
noremap zO zozczO

" use q as @ for macro, Q as original q.
nnoremap q @
nnoremap Q q
vnoremap q :norm! @
vnoremap Q q

" default do not copy when changing.
" nnoremap d "_d
" vnoremap d "_d
nnoremap c "_c
vnoremap c "_c
nnoremap s "_s
vnoremap s "_s
nnoremap C "_C
vnoremap C "_C
nnoremap S "_S
" noremap <C-d> d

" paste in visual mode without re-copy
function! RestoreRegister()
  let @" = s:restore_reg
  return ''
endfunction

function! s:Repl()
    let s:restore_reg = @"
    return "p@=RestoreRegister()\<cr>"
endfunction

" NB: this supports "rp that replaces the selection by the contents of @r
vnoremap <silent> <expr> p <sid>Repl()

" nnoremap <leader>CL :colorscheme github<cr>:AirlineTheme tommyx<cr>
" nnoremap <leader>CD :colorscheme githubdark<cr>:AirlineTheme tommyxdark<cr>
nnoremap <leader>CL :set background=light<cr>
nnoremap <leader>CD :set background=dark<cr>

" [f and ]f jump fix list
nnoremap [f :lp<cr>
nnoremap ]f :lne<cr>

" \ in normal mode to escape the character
nnoremap \ i\<esc>l

" Plugin settings:
" Below are some 'sane' (IMHO) defaults for a couple of the above plugins I
" referenced.

" Map the key for toggling comments with vim-commentary
nnoremap <leader>c <Plug>CommentaryLine

" macro commands
command! -range=% -nargs=0 Tab2Space execute '<line1>,<line2>s#^\t\+#\=repeat(" ", len(submatch(0))*' . &ts . ')'
command! -range=% -nargs=0 Space2Tab execute '<line1>,<line2>s#^\( \{'.&ts.'\}\)\+#\=repeat("\t", len(submatch(0))/' . &ts . ')'


" expand('%')
let knownFileExtensions = '**/*.txt **/*.c **/*.cpp **/*.h **/*.hpp **/*.py **/*.cs **/*.java **/*.qml **/*.js **/*.html **/*.tex **/*.xml **/*.hx **/*.as **/*.css **/*.php'
command! -nargs=1 Grep execute 'noautocmd lvimgrep /<args>/j ' . substitute(expand('%'), ' ', '\\ ', 'g') . ' | lopen'
" command! -nargs=1 Grep execute 'noautocmd lvimgrep /<args>/j '. '"' . expand('%') . '"' . ' | lopen'
command! -nargs=1 GrepAll execute 'noautocmd lvimgrep /<args>/j '. knownFileExtensions .' | lopen'
command! -nargs=1 GrepArgs execute 'noautocmd lvimgrep /<args>/j ## | lopen'
nnoremap <C-f> :Grep<space>
vnoremap <C-f> y:Grep<space><C-r>"
nnoremap <leader><C-f> :GrepAll<space>
vnoremap <leader><C-f> y:GrepAll<space><C-r>"
nnoremap <leader><C-g> :GrepArgs<space>
vnoremap <leader><C-g> y:GrepArgs<space><C-r>"
 
nnoremap <leader><leader>tex<space>be :norm! yypkI\begin{<esc>A}<esc>jI\end{<esc>A}<esc>O
nnoremap <leader><leader>tex<space>lr :norm! i\left<esc>l%i\right<esc>
nnoremap <leader><leader>tex<space>\ :norm! i\<esc>l%i\<esc>

nnoremap <leader><leader>c<space>prln :norm! oprintf("\n");<esc>4hi
nnoremap <leader><leader>c<space>pdln :norm! oprintf("%d\n", );<esc>1hi
nnoremap <leader><leader>c<space>prlnx :norm! ostd::cout << "" << std::endl;<esc>14hi
nnoremap <leader><leader>c<space>pdlnx :norm! ostd::cout <<  << std::endl;<esc>13hi
nnoremap <leader><leader>c<space>cr :norm! biconst <esc>ea&<esc>
nnoremap <leader><leader>c<space>hg :norm! yypI#define <esc>kI#ifndef <esc>jo<cr><cr><cr>#endif<esc>kki

nnoremap <leader><leader>la<space>e :norm! F(lvf,lyPpa\hdots, <esc>f,llxF1vpF(f1l<C-a>f)hvhdl

" nnoremap <leader><leader>mltag :norm! yypkI<<esc>A><esc>jI<\<esc>A><esc>O


imap j[ <C-x><C-p>
