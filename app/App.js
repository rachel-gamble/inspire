import { BackgroundController } from "./Controllers/BackgroundController.js"
// import { ClockController } from "./Controllers/ClockController.js";
// import { TodosController } from "./Controllers/TodosController.js";
// import { WeatherController } from "./Controllers/WeatherController.js";
// import { QuotesController } from "./Controllers/QuotesController.js";

class App {
  backgroundController = new BackgroundController();
  // clockController = new ClockController();
  // todoController = new TodosController();
  // weatherController = new WeatherController();
  // quotesController = new QuotesController()
}

window["app"] = new App();
