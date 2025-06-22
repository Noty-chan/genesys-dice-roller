# Genesys Dice Roller
> Easy-to-use digital Genesys RPG dice roller for mobile devices.

This repository houses the web application of a dice roller for Genesys RPG tabletop roleplaying system. It aims to provide convenient alternative to native Android application, one that's easy on resources, and can be accessed from any mobile device.
The fork adds Discord integration and several quality of life improvements for remote play.

## Usage

To use it, simply open your mobile web browser and navigate to https://d1sover.github.io/genesys-dice-roller/.

### Discord

В настройках можно указать до пяти вебхуков Discord. Через выпадающий список выбирается приоритетный канал, в который по умолчанию отправляются результаты. При желании приложение может отправлять в Discord автоматически после броска.

### Development

Для локального запуска установите зависимости `npm install`, затем выполните `npm run start` и откройте страницу, выдаваемую Webpack dev server. Сборка для продакшена выполняется через `npm run build`.

## Roadmap

- [x] Basic dice roller implementation
- [x] Grid display for dice in the pool
- [x] Implement percentile die (for critical rolls etc)
- [x] Selecting dice and removing/rerolling them individually
- [x] Interface for adding the dice
- [x] Result summary
  - [x] Automatic removal of opposing results and final state
- [ ] Gestures for removing/rerolling the dice pool
- [ ] Web application functionality (working offline)
- [x] Dark theme
- [ ] Setting dice to specific results
