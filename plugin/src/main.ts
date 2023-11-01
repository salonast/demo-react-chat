import { plugin as TetrisPlugin } from './plugin';  // Existing Tetris plugin
import { plugin as UploadcarePlugin } from './UploadcarePlugin';  // New Uploadcare plugin

window.vfplugin = Object.assign(window.vfplugin ?? {}, {
  [TetrisPlugin.name]: TetrisPlugin,
  [UploadcarePlugin.name]: UploadcarePlugin,
});
