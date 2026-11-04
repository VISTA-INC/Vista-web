# PRISM app icon and splash

Assets for the PRISM Meta Quest app, built from the flat prism mark.

| File | Size | Use |
| --- | --- | --- |
| `prism-app-icon-1024.png` | 1024 × 1024 | Unity default icon, store icon source |
| `prism-app-icon-512.png` | 512 × 512 | Smaller icon slots |
| `prism-splash-logo.png` | 1600 × 448, transparent | Logo for the Unity splash screen |
| `prism-splash-2048x1024.png` | 2048 × 1024 | Full splash image, logo on graphite |

Background color for all of them: `#141415`.

## Unity setup

1. Copy the PNGs into the Unity project, for example `Assets/Branding/`.
2. Select each PNG and set Texture Type to Sprite (2D and UI) for the splash logo, Default for the icons. Turn off compression for the icons.
3. Icon: Project Settings > Player > Icon, set Default Icon to `prism-app-icon-1024.png`.
4. Splash: Project Settings > Player > Splash Image.
   - Background color `#141415`, no background image.
   - Logos: add `prism-splash-logo.png`, Draw Mode "Unity logo below" off if your license allows, otherwise "All sequential".
   - Animation: Static.
5. Meta system splash (shown while the app loads): in the Meta XR / OVR project settings, set the system splash screen to `prism-splash-2048x1024.png`.
6. Build and check on a headset that the logo is centered and not cropped.

The store asks for its own cover-art sizes. Make those from the same mark and background when you submit.
