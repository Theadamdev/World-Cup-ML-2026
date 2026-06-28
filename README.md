# ⚽ World Cup ML 2026

> **A community-driven extension of Jerry Chen's World Cup prediction model.**
>
> This project builds upon the original Elo + Dixon-Coles prediction engine and extends it with new simulation features, developer tools, and (in the future) a complete AI-powered FIFA World Cup simulator.

![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🌍 About This Project

This repository is based on the excellent work of **Jerry Chen**, whose World Cup prediction model combines:

* Elo Ratings
* Dixon-Coles Goal Model
* Poisson Goal Distribution
* Monte Carlo Simulation

The goal of this fork is **not to replace the original project**, but to expand it into a larger open-source football analytics platform.

### Current additions

| Feature                                      | Status |
| -------------------------------------------- | :----: |
| Monte Carlo Match Simulator (`simulate.mjs`) |    ✅   |
| Improved command-line output                 |    ✅   |
| Better project documentation                 |    ✅   |
| Future REST API                              |   🚧   |
| Future Web Dashboard                         |   🚧   |
| Future World Cup Tournament Simulator        |   🚧   |

---

## 🚀 Vision

The long-term goal is to transform this project into a complete football prediction platform where users can:

* Predict any international football match
* Simulate entire World Cup tournaments
* Compare national teams
* Visualize tournament probabilities
* Explore detailed statistics through a modern web interface

---

## ⭐ Acknowledgements

This project would not exist without the original work by **Jerry Chen**.

The original repository provides the statistical prediction engine and serves as the foundation for this project.

This repository extends that work with additional features while preserving the transparency and reproducibility of the original model.

Artificial intelligence tools were also used during development to help understand the codebase, prototype new features, improve documentation, and accelerate development. Every new feature is reviewed, tested, and integrated by the repository author.

---

**Everything below this section (methodology, model description, backtesting, and usage) is largely inherited from the original project so users can understand how the prediction engine works. New features will be documented as they are added.**
