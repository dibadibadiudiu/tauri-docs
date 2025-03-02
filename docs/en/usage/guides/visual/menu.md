---
title: Window Menu
---

Native application menus can be attached to a window.

### Setup

Enable the `menu` feature flag on `src-tauri/Cargo.toml`:

```toml
[dependencies]
tauri = { version = "1.0.0-beta.0", features = ["menu"] }
```

### Creating a menu

To create a native window menu, import the `Menu`, `MenuItem` and `CustomMenuItem` types.
The `MenuItem` enum contains a collection of platform-specific items (currently ignored on Windows).
The `CustomMenuItem` allows you to create your own menu items and add special functionality to them.

```rust
use tauri::{CustomMenuItem, Menu, MenuItem};
```

Create a `Menu` array:

```rust
// here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.
let quit = CustomMenuItem::new("quit".to_string(), "Quit");
let close = CustomMenuItem::new("close".to_string(), "Close");
let menu = vec![
  // on macOS first menu is always app name
  Menu::new("MyApp", vec![
    MenuItem::Services,
    MenuItem::Separator,
    MenuItem::Hide,
    MenuItem::HideOthers,
    MenuItem::ShowAll,
    MenuItem::Separator,
    MenuItem::Custom(quit),
    MenuItem::Custom(close),
  ]),
  Menu::new(
    "Edit",
    vec![
      MenuItem::Undo,
      MenuItem::Redo,
      MenuItem::Separator,
      MenuItem::Cut,
      MenuItem::Copy,
      MenuItem::Paste,
      MenuItem::Separator,
      MenuItem::SelectAll,
    ],
  )
];
```

### Adding the menu to all windows

The defined menu can be set to all windows using the `menu` API on the `tauri::Builder` struct:

```rust
use tauri::{CustomMenuItem, Menu, MenuItem};

fn main() {
  let menu = vec![]; // insert the menu array here
  tauri::Builder::default()
    .menu(menu)
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

### Adding the menu to a specific window

You can create a window and set the menu to be used. This allows defining a specific menu set for each application window.

```rust
use tauri::{CustomMenuItem, Menu, MenuItem};
use tauri::WindowBuilder;

fn main() {
  let menu = vec![]; // insert the menu array here
  tauri::Builder::default()
    .create_window(
      "main-window".to_string(),
      tauri::WindowUrl::App("index.html".into()),
      move |window_builder, webview_attributes| {
        (window_builder.menu(menu), webview_attributes)
      },
    )
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

### Listening to events on custom menu items

Each `CustomMenuItem` triggers an event when clicked. Use the `on_menu_event` API to handle them, either on the global `tauri::Builder` or on an specific window.

#### Listening to events on global menus

```rust
use tauri::{CustomMenuItem, Menu, MenuItem};

fn main() {
  let menu = vec![]; // insert the menu array here
  tauri::Builder::default()
    .menu(menu)
    .on_menu_event(|event| {
      match event.menu_item_id().as_str() {
        "quit" => {
          std::process::exit(0);
        }
        "close" => {
          event.window().close().unwrap();
        }
        _ => {}
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

#### Listening to events on window menus

```rust
use tauri::{CustomMenuItem, Menu, MenuItem};
use tauri::{Manager, WindowBuilder};

fn main() {
  let menu = vec![]; // insert the menu array here
  tauri::Builder::default()
    .create_window(
      "main-window".to_string(),
      tauri::WindowUrl::App("index.html".into()),
      move |window_builder, webview_attributes| {
        (window_builder.menu(menu), webview_attributes)
      },
    )
    .setup(|app| {
      let window = app.get_window("main-window").unwrap();
      let window_ = window.clone();
      window.on_menu_event(move |event| {
        match event.menu_item_id().as_str() {
          "quit" => {
            std::process::exit(0);
          }
          "close" => {
            window_.close().unwrap();
          }
          _ => {}
        }
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```
