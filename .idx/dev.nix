{ pkgs }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.bun
  ];
  idx.extensions = [
    "bradlc.vscode-tailwindcss"
    "christian-kohler.path-intellisense"
    "dbaeumer.vscode-eslint"
    "dsznajder.es7-react-js-snippets"
    "eamodio.gitlens"
    "edwinhuish.better-comments-next"
    "esbenp.prettier-vscode"
    "formulahendry.auto-close-tag"
    "GitHub.vscode-pull-request-github"
    "HookyQR.beautify"
    "IronGeek.vscode-env"
    "miguelsolorio.fluent-icons"
    "PKief.material-icon-theme"
    "rangav.vscode-thunder-client"
    "streetsidesoftware.code-spell-checker"
    "streetsidesoftware.code-spell-checker-spanish"
    "usernamehw.errorlens"
    "wix.vscode-import-cost"
  ];
  idx.previews = {
    previews = [];
  };
}
