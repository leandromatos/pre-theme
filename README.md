#Pre Theme

A simple and dark theme enough for [Alfred](#alfred), [iTerm](#iterm), [Sublime](#sublime), [Terminal (Mac)](#terminal), [ZSH](#zsh) and [Sequel Pro](#sequel-pro).

## Alfred<a id="alfred"></a>

![Alfred](https://raw.githubusercontent.com/leandromatos/pre-theme/gh-pages/assets/image/screenshots/alfred.png)

### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
$ git clone https://github.com/leandromatos/pre-theme/
```

### Install manually

Download using the [GitHub .zip download](https://github.com/leandromatos/pre-theme/archive/master.zip) option and unzip them.

### Activate the theme

Double-clicking on **alfred/Pre.alfredappearance** file

## iTerm2<a id="iterm"></a>

![iTerm2](https://raw.githubusercontent.com/leandromatos/pre-theme/gh-pages/assets/image/screenshots/iterm2-with-zsh-theme.png)

**Note:** iTerm2 with ZSH Theme.

### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
$ git clone https://github.com/leandromatos/pre-theme/
```

### Install manually

Download using the [GitHub .zip download](https://github.com/leandromatos/pre-theme/archive/master.zip) option and unzip them.

### Activate the theme

1. Go to *iTerm2 > Preferences > Profiles > Colors Tab*
2. Click *Load Presets …*
3. Click *Import*
4. Select the **iterm/Pre.itermcolors** file
5. Select **Pre** from *Load Presets …*

## Sublime<a id="sublime"></a>

![Sublime](https://raw.githubusercontent.com/leandromatos/pre-theme/gh-pages/assets/image/screenshots/sublime.png)

### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
$ git clone https://github.com/leandromatos/pre-theme/
```

### Install manually

Download using the [GitHub .zip download](https://github.com/leandromatos/pre-theme/archive/master.zip) option and unzip them.

### Activate the theme

1. Go to *Sublime Text > Preferences > Browse Packages …*
2. Copy the **sublime/Theme - Pre** folder and paste into your Sublime Text **Package** directory
3. Go to *Sublime Text > Preferences > Settings – User* and add preferences

```
"theme": "Pre.sublime-theme",
"color_scheme": "Packages/Theme - Pre/Pre.tmTheme",
```

### Theme styles

This theme provides an alternative style:

**Screencasts**

Set big text including tabs and sidebar

```
"pre_theme_screencasts": true,
"font_size": 18.0,
```

### Recommended settings for a better UI experience:

```
"overlay_scroll_bars": "enabled",
"font_size": 14.0,
"line_padding_top": 4,
"line_padding_bottom": 4,
"indent_guide_options": [ "draw_normal", "draw_active" ], // highlight active indent
"font_options": [ "gray_antialias" ], // on retina Mac
```

**Note:** Remember to restart Sublime Text after modify any preferences in *Settings – User*.


## Terminal (Mac)<a id="terminal"></a>

![Terminal (Mac)](https://raw.githubusercontent.com/leandromatos/pre-theme/gh-pages/assets/image/screenshots/terminal-with-zsh-theme.png)

**Note:** Terminal (Mac) with ZSH Theme.

### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
$ git clone https://github.com/leandromatos/pre-theme/
```

### Install manually

1. Download using the [GitHub .zip download](https://github.com/leandromatos/pre-theme/archive/master.zip) option and unzip them.

### Activate the theme

1. Go to *Terminal > Preferences*
2. Click *"Gear" icon*
3. Click *Import …*
4. Select the **terminal/Pre.terminal** file
5. Click *Default*

## ZSH<a id="zsh"></a>

### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
$ git clone https://github.com/leandromatos/pre-theme/
```
And creating a symbolic link to oh-my-zsh's theme folder:

```
$ ln -s $PRE_THEME/zsh/pre.zsh-theme $OH_MY_ZSH/themes/pre.zsh-theme
```
***Note:*** Remember that you should replace **$PRE_THEME** and **$OH_MY_ZSH** to the actual directories for this command to work.

### Install manually

1. Download using the [GitHub .zip download](https://github.com/leandromatos/pre-theme/archive/master.zip) option and unzip them.
2. Move **zsh/pre.zsh-theme** file to oh-my-zsh's theme folder: **~/.oh-my-zsh/themes/pre.zsh-theme**.

### Activate the theme

1. Go to your **~/.zshrc** file and set **ZSH_THEME="pre"**.

***Note:*** The theme requires specific fonts to display the status icons correctly in the terminal. Please [download](https://github.com/powerline/fonts) and install all variations named "Inconsolata".

### Recommended settings for a better UI experience:

**If you use iTerm2**

1. Go to *iTerm2 > Preferences > Profiles > Text Tab*
2. In *Regular-Font* click in *Change font* and select family *Menlo*, typeface *Regular* and size *14*
3. In *Non-ASCII Font* click in *Change font* and select family *Incosolata-g for Powerline*, typeface *g* and size *14*

**If you use terminal (mac)**

1. Go to *Terminal > Preferences*
2. In *Font* click in *Change …* and select family *Incosolata for Powerline*, typeface *Medium* and size *14*

## Sequel Pro <a id="sequel-pro"></a>

![Sequel Pro](https://raw.githubusercontent.com/leandromatos/pre-theme/gh-pages/assets/image/screenshots/sequel-pro.png)

### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
$ git clone https://github.com/leandromatos/pre-theme/
```

### Install manually

1. Download using the [GitHub .zip download](https://github.com/leandromatos/pre-theme/archive/master.zip) option and unzip them.

### Activate the theme

1. Go to *Sequel Pro > Preferences > Query Editor*
2. Click *"Gear" icon*
3. Click *Click Import Color Scheme...*
4. Select the **Select the Pre.spTheme file** file

## Slack <a id="slack"></a>

![Slack]()

### Install manually

1. Open the Slack team you’d like to customize
2. Click your team name to open the Team Menu
3. Choose *Preferences*
4. Select the *Sidebar Theme* tab
5. If necessary, click *Customize your theme and share it with others*
6. Paste the colors below into the box *Copy and paste these values to share your custom theme with others*

```
#292929,#191919,#F8F8F2,#292929,#7B7B7B,#F8F8F2,#38FF67,#FB0030
```

## Contributing

If you want to help, please read the [Contributing guide](https://github.com/leandromatos/pre-theme/blob/master/CONTRIBUTING.md).

## License

[MIT License](http://leandromatos.mit-license.org/) © Leandro Matos,
