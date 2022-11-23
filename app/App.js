import { BackgroundController } from "./Controllers/BackgroundController.js"
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
// import { ClockController } from "./Controllers/ClockController.js";
// import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  backgroundController = new BackgroundController();
  quoteController = new QuoteController()
  todosController = new TodosController();
  // clockController = new ClockController();
  // weatherController = new WeatherController();
}

window["app"] = new App();
