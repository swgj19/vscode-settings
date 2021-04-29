{
	// Live Server Settings
	"liveServer.settings.donotVerifyTags": true,
	"liveServer.settings.donotShowInfoMsg": true,

	// Theme Settings
	"workbench.colorTheme": "Sublime Material Theme - Dark",
	"launch": {
		"configurations": [],
		"compounds": []
	},

	// Vim Settings
	"vim.useCtrlKeys": true,
	"vim.useSystemClipboard": true,
	// Insert mode
	"vim.insertModeKeyBindings": [
		// In insert mode jj to escape
		{
			"before": ["j", "j"],
			"after": ["<Esc>"]
		}
	],
	// Visual mode
	"vim.visualModeKeyBindings": [
		// In visual mode i goes to insert mode
		{
			"before": ["i"],
			"after": ["<Esc>", "i"]
		}
	],
	// Escaping from vim for below commands
	"vim.handleKeys": {
		// Select all
		"<C-a>": false,
		// VS Code search in file
		"<C-f>": false,
		// VS Code new marker @ next occurence
		"<C-d>": false,
		// Copy
		"<C-c>": false,
		// Cut
		"<C-x>": false,
		// Paste
		"<C-v>": false
	},

	// Editor Settings
	"editor.tabSize": 6,
	"css.completion.completePropertyWithSemicolon": false,
	"editor.formatOnSave": true,
	"editor.wordWrap": "on",
	"editor.fontFamily": "DejaVu Sans Condensed",
	"editor.fontLigatures": true,
	"editor.fontSize": 15,
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[jsonc]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},

	"editor.fontWeight": 300,
	"[json]": {
		"editor.quickSuggestions": {
			"strings": true
		},
		"editor.suggest.insertMode": "replace"
	},

	// Quotes Settings
	"javascript.preferences.quoteStyle": "single",

	// Prettier Extension Settings
	"prettier.singleQuote": true,
	"prettier.jsxSingleQuote": true,
	"prettier.useTabs": true,
	"prettier.endOfLine": "auto",

	"html.autoClosingTags": true,

	"emmet.excludeLanguages": ["markdown"],

	"material-icon-theme.showWelcomeMessage": false,

	// VS Code bottom Tool Bar
	"workbench.colorCustomizations": {
		"statusBar.background": "#1A1A1A",
		"statusBar.noFolderBackground": "#212121",
		"statusBar.debuggingBackground": "#263238"
	},

	// Terminal Settings
	"terminal.integrated.allowChords": false,
	"terminal.external.osxExec": "iTerm.app",
	"terminal.integrated.shell.osx": "/bin/zsh",
	"terminal.integrated.fontFamily": "Consolas",
	"terminal.integrated.fontSize": 14,
	"scss.completion.completePropertyWithSemicolon": false,
	"less.completion.completePropertyWithSemicolon": false,
	"editor.acceptSuggestionOnEnter": "off"
}
