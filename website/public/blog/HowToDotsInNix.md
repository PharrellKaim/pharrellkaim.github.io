## Introduction

If you’re like me and you switch machines more often than you’d like to admit, or you just care about having a clean, reproducible setup for your terminal environment, then **Nix Home Manager** is honestly one of the best tools you can pick up.

What makes it interesting is not just convenience, but the idea behind it:
Instead of manually setting up your system every time, you describe it once and it can be rebuilt anywhere.

Especially when combined with **NixOS**, you get something pretty powerful: a fully reproducible system where both your OS and your dotfiles are basically “version controlled”. That means:
- no more missing configs after a reinstall
- no more manual setup steps
- no more "it works on my machine"


Your environment becomes portable, reproducible, and easy to maintain.

---

## ❄️ NixOS vs Home Manager
First of all it is very important to understand the difference between **NixOS** and **Nix Home Manager**:

### NixOS:

NixOS is the entire operating system. It controls everything that runs on your machine at system level:
- system packages
- services
- users
- system configuration

The idea is: Your whole machine is defined in code. So instead of clicking around settings or installing packages manually, you declare what you want and Nix is building the system for you.

---

### Nix Home Manager

Home Manager is one level above. It focuses only on your user Environment, it manages: 
- dotfiles (.zshrc, .config, etc.)
- shell setup
- CLI tools
- environment variables

👉 Simple way to think about it:
- NixOS = how the system behaves
- Home Manager = how you work inside that system

This separation is very powerful because it keeps system configuration and personal user configuration isolated.

---

### How Home Manager Works

Home Manager generates and manages configuration files inside your home directory.

Instead of editing files manually, Home Manager creates symlinks and managed configuration files based on your Nix configuration.

Your setup becomes reproducible because everything is generated from code.

---

## Why use Home Manager?
Most people using **Home Manager** for one reason: dotfiles become messy over time. There are several tools that try to solve this problem, such as [chezmoi](https://www.chezmoi.io/), but **Home Manager** feels especially powerful because it integrates directly into the Nix ecosystem.

- All dotfiles in one place
- Reproducible setup
- Easy rollbacks
- Same environment everywhere

It removes the usual “setup chaos”.

---

## Why Not Just Use Traditional Dotfiles?

Traditional dotfiles usually solve only a part of the problem.

A Git repository with *'.zshrc'* and *'.gitconfig'* is useful, but it still requires:

- manually installing packages
- manually setting up tools
- handling dependencies yourself
- documenting setup steps

Home Manager combines package management and configuration management in one place.

Your tools and configs are defined together.

---

## 👨‍💻 Why I Personally use it

As a platform engineer, my terminal environment is one of the most important parts of my workflow.

Over time I realized that rebuilding my setup manually whenever I changed machines was wasting a surprising amount of time.

There were always small things missing:

- aliases
- shell plugins
- Git configuration
- SSH configuration
- terminal settings
- CLI tools
- editor preferences

**Home Manager** solved this problem completely.

Now my workflow looks like this:

1. Clone my dotfiles repository
2. Apply the configuration
3. Continue working

No manual setup.
No forgotten configuration files.
No inconsistencies between machines.

It also gives me confidence that I can completely rebuild my environment at any time.

---
## Installation with Flakes

This setup uses Nix Flakes, which is the modern and recommended way.

Flakes make your configuration more structured and reproducible.

### 1. Install Nix
```bash
curl -L https://nixos.org/nix/install | sh
```

### 2. Enable flakes
Create the Nix Configuration directory:
```bash
mkdir -p ~/.config/nix
```
Enable flakes:
```bash
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
```

Why this matters:
Flakes enable reproducible configurations and dependency locking, similar to package-lock.json in Node.js or Cargo.lock in Rust.

### 3. Create Home Manager config
First you need to create the configuration directory:

```bash
mkdir -p ~/.config/home-manager
cd ~/.config/home-manager
```

And now you can initialize the flake:

```nix
nix flake init
```
At this point, you’re basically creating the structure where your entire user environment will live.

---

### 4. flake.nix

This file defines where your packages come from and how your system is built. Example:

```nix
{
  description = "Home Manager config";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    home-manager.url = "github:nix-community/home-manager";
    home-manager.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = { nixpkgs, home-manager, ... }:
    let system = "x86_64-linux";
    in {
      homeConfigurations = {
        user = home-manager.lib.homeManagerConfiguration {
          pkgs = nixpkgs.legacyPackages.${system};
          modules = [ ./home.nix ];
        };
      };
    };
}
```

---

### 5. home.nix
This is the file where your actual user environment is defined.
Think of it as your “dotfiles, but structured”.

Example:

```nix
{ config, pkgs, ... }:

{
  home.username = "user";
  home.homeDirectory = "/home/user";

  programs.home-manager.enable = true;

  home.packages = with pkgs; [
    git
    curl
    wget
  ];
}
```
You can expand this endlessly — shell configs, aliases, tools, everything.

---

### 6. Apply
Run:
```bash
home-manager switch --flake ~/.config/home-manager
```

This command builds your entire environment and applies it.

If something goes wrong, you can always roll back to a previous generation.

---

## My setup
If you want to see a real-world example, here is my dotfiles repo:
[https://github.com/PharrellKaim/dots](https://github.com/PharrellKaim/dots)

**🛠️ Tools I use:**

These are the tools that make my terminal workflow faster and more enjoyable:

- **Zoxide** — smarter cd that learns your habits
- **Starship** — clean and fast shell prompt
- **Zellij** — modern terminal multiplexer
- **eza** — better version of 'ls'
- **fzf** — fuzzy finder for everything in the terminal

Each of them removes friction in daily CLI work and saves a surprising amount of time once you get used to them.

---

## 💭 Final thoughts
**Home Manager** is especially useful if you care about:

- reproducibility
- clean and maintainable dotfiles
- portable development environments
- automation
- reducing manual setup work

And when combined with **NixOS**, you basically get a full system where everything from OS to shell is defined in code.

It takes a bit of time to learn. Nix introduces its own language, ecosystem, and way of thinking about package management and system configuration. But once it clicks, it’s hard to go back to traditional setups.

## 📖 References

**Official Documentation**
- [https://nixos.org](https://nixos.org)
- [https://nix-community.github.io/home-manager](https://nix-community.github.io/home-manager)
- [https://nixos.wiki/wiki/Flakes](https://nixos.wiki/wiki/Flakes)

**Recommended Tools**
- [https://github.com/ajeetdsouza/zoxide](https://github.com/ajeetdsouza/zoxide)
- [https://zellij.dev](https://zellij.dev)
- [https://starship.rs](https://starship.rs)
- [https://github.com/eza-community/eza](https://github.com/eza-community/eza)
- [https://github.com/junegunn/fzf](https://github.com/junegunn/fzf)

**Other References**
- [https://nixos.wiki](https://nixos.wiki)
- [https://www.chezmoi.io](https://www.chezmoi.io)
- [https://github.com/PharrellKaim/dots](https://github.com/PharrellKaim/dots)