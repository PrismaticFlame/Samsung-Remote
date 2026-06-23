use tauri::{
    menu::{Menu, MenuItem},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    Manager,
};
use tauri_plugin_global_shortcut::{Code, GlobalShortcutExt, Modifiers, Shortcut};
use std::process::Command;
// "use" is just like import in Python? #QUESTION

#[tauri::command]  //  this is like making a method that you can call later in Python? #QUESTION
fn run_tv_command(args: Vec<String>) -> Result<String, String> {
    let output = Command::new("samsungtv")  //  is this like a struct or something? #QUESTION
        .args(&args)
        .output()
        .map_err(|e| format!("Failed to run samsungtv: {}", e))?;  

    if output.status.success() {  //  if that output status is returned as success, "print" OK? #QUESTION
        Ok(String::from_utf8_lossy(&output.stdout).to_string())  // I don't know what "from_utf8_lossy" is, and is the "&" a pointer like in C++? #QUESTION
    } else {  // if not success, print the error message
        Err(String::from_utf8_lossy(&output.stderr).to_string())
    }
}

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .invoke_handler(tauri::generate_handler![run_tv_command])
        .setup(|app| {
            let handle = app.handle().clone();

            // Register global shortcut Ctrl+Shift+T to toggle window
            let shortcut = Shortcut::new(
                Some(Modifiers::CONTROL | Modifiers::SHIFT),
                Code::KeyT
            );
            app.global_shortcut().on_shortcut(shortcut, move |_app, _shortcut, _event| {
                let handle = handle.clone();
                if let Some(window) = handle.get_webview_window("main") {
                    if window.is_visible().unwrap_or(false) {
                        let _ = window.hide();
                    } else {
                        let _ = window.show();
                        let _ = window.set_focus();
                    }
                }
            })?;

            // Build tray icon
            let app_handle = app.handle().clone();
            let show = MenuItem::with_id(app, "show", "Show Remote", true, None::<&str>)?;  // What does the "?" at the end mean? #QUESTION
            let quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
            let menu = Menu::with_items(app, &[&show, &quit])?;

            TrayIconBuilder::new()  // Is TrayBuilderIcon an instantiation of an object that is getting customized as such below? #QUESTION
                .icon(app.default_window_icon().unwrap().clone())
                .menu(&menu)
                .tooltip("Samsung Remote")
                .on_menu_event(move |_tray, event| {  // Is this like a lambda function, putting a function inside a "parameter"? #QUESTION
                    match event.id.as_ref() {
                        "show" => {
                            if let Some(window) = app_handle.get_webview_window("main") {
                                let _ = window.show();
                                let _ = window.set_focus();
                            }
                        }
                        "quit" => {
                            app_handle.exit(0);
                        }
                        _ => {}  // What is happening on these? From "quit" to this line? #QUESTION
                    }
                })
                .on_tray_icon_event(|tray, event| {  // I just need this section explained #QUESTION
                    if let TrayIconEvent::Click {
                        button: MouseButton::Left,
                        button_state: MouseButtonState::Up,
                        ..
                    } = event
                    {
                        let app = tray.app_handle();
                        if let Some(window) = app.get_webview_window("main") {
                            if window.is_visible().unwrap_or(false) {
                                let _ = window.hide();
                            } else {
                                let _ = window.show();
                                let _ = window.set_focus();
                            }
                        }
                    }
                })
                .build(app)?;

            Ok(())  // What does Ok do? Why are these two parens? #QUESTION
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
