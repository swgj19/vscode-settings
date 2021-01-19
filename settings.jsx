{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "editor.fontFamily": "DejaVu Sans Condensed",
  "editor.fontLigatures": true,
  "editor.fontSize": 15,
  "prettier.singleQuote": true,
  "liveServer.settings.donotVerifyTags": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "html.autoClosingTags": false,
  "liveSassCompile.settings.formats": [

    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "/dist/css"
    }
  ],
  "workbench.colorTheme": "Community Material Theme Darker High Contrast",
  "workbench.iconTheme": "eq-material-theme-icons-light",
  "launch": {

    "configurations": [],
    "compounds": []
  },
  "editor.fontWeight": 300,
  "[json]": {
  



    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace"
  },
  "prettier.jsxSingleQuote": true,
  "prettier.useTabs": true,
  "prettier.endOfLine": "auto",
  
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
      "<C-v>": false,
},
    "editor.tabSize": 6,
    "css.completion.completePropertyWithSemicolon": false,



{
	"editor.formatOnPaste": true,
	"editor.formatOnSave": true,
	"editor.wordWrap": "on",
	"editor.fontFamily": "DejaVu Sans Condensed",
	"editor.fontLigatures": true,
	"editor.fontSize": 15,
	"editor.tabSize": 6,
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.fontWeight": 300,
  "[json]": {
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace"
  },
	"javascript.preferences.quoteStyle": "single",
	"prettier.singleQuote": true,
	"prettier.jsxSingleQuote": true,
	"prettier.useTabs": true,
	"prettier.endOfLine": "auto",
	"liveServer.settings.donotVerifyTags": true,
	"liveServer.settings.donotShowInfoMsg": true,
  "html.autoClosingTags": false,
  "css.completion.completePropertyWithSemicolon": false,
	"liveSassCompile.settings.formats": [
		{
			"format": "compressed",
			"extensionName": ".min.css",
			"savePath": "/dist/css"
		}
	],
	"workbench.colorTheme": "Community Material Theme Darker High Contrast",
	"workbench.iconTheme": "eq-material-theme-icons-light",
	"launch": {
		"configurations": [],
		"compounds": []
	},

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
	}
}
