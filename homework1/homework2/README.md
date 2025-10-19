# 数字孪生作业二

## 作业要求
在第一次作业基础上完成：
1. 把Unity模型导出为GLTF模型，或者把Blender模型导出为GLTF模型
2. 装载GLTF模型
3. 调用OrbitControl库(包)编程实现常用的鼠标操作控制

## 实现功能

### 1. GLTF模型加载（使用官方库）
- **使用Three.js官方GLTFLoader库**加载GLTF/GLB模型
- 支持多个模型切换（通过下拉菜单选择）
- 自动调整相机位置以适应不同大小的模型
- 支持模型动画播放
- 完整的错误处理和加载进度显示

### 2. OrbitControls鼠标控制（使用官方库）
- **使用Three.js官方OrbitControls库**实现鼠标控制
- **鼠标左键拖拽**：旋转视角
- **鼠标右键拖拽**：平移视角
- **鼠标滚轮**：缩放
- **中键拖拽**：平移视角
- 启用阻尼效果，让控制更加平滑
- 设置合理的缩放和旋转限制
- 完全基于官方库，无自定义鼠标控制代码

### 3. 模型管理
- 支持加载多个GLTF模型
- 模型选择器可以动态切换不同模型
- 自动计算模型边界框并调整相机位置
- 支持模型阴影效果

## 技术特点

### 使用的官方库和工具
- **Three.js核心库**：3D图形渲染引擎
- **GLTFLoader库**：Three.js官方GLTF模型加载器
- **OrbitControls库**：Three.js官方轨道控制器
- **无自定义实现**：完全基于官方库，无自定义鼠标控制代码

### 核心功能实现（基于官方库）
1. **模型加载**：使用官方GLTFLoader异步加载模型，支持进度回调
2. **相机控制**：使用官方OrbitControls实现完整的鼠标交互
3. **光照系统**：环境光、方向光、点光源组合
4. **阴影效果**：启用阴影映射，增强视觉效果
5. **动画支持**：支持GLTF模型中的动画播放
6. **库集成**：完全依赖官方库，确保稳定性和兼容性

## 文件结构
```
作业二/
├── final-homework.html # 最终版本（推荐使用）
├── index.html          # 主页面文件（传统CDN方式）
├── index-modern.html   # 现代版（ES6模块方式）
├── index-library.html  # 库版本（强调官方库使用）
├── debug.html          # 模型调试页面
├── test.html           # 模型测试页面
└── README.md           # 说明文档
```

## 使用方法
1. **推荐使用**：打开 `final-homework.html` 查看最终版本
2. **测试模型**：打开 `debug.html` 检查模型文件状态
3. **查看3D模型**：选择以下任一版本：
   - `final-homework.html` - 最终版本（推荐）
   - `index.html` - 传统CDN方式
   - `index-modern.html` - 现代ES6模块方式  
   - `index-library.html` - 强调官方库使用版本
3. **交互操作**：使用鼠标进行交互：
   - 左键拖拽旋转视角（OrbitControls库）
   - 右键拖拽平移视角（OrbitControls库）
   - 滚轮缩放（OrbitControls库）
   - 中键拖拽平移（OrbitControls库）

## 模型文件
模型文件位于 `../assets/models/` 目录下：
- `house_model.glb` - 房屋模型
- `house.glb` - 房屋1
- `house1.glb` - 房屋2
- `x-12_mech.glb` - 机械模型
- `downloaded_scene.glb` - 场景模型

## 技术亮点
- **完全基于官方库**：使用Three.js官方GLTFLoader和OrbitControls库
- **无自定义实现**：所有功能都通过官方库接口实现
- **完整的GLTF模型加载和显示**：支持GLB/GLTF格式
- **专业的OrbitControls交互体验**：官方库提供的流畅控制
- **自适应相机定位**：自动调整相机位置适应模型大小
- **平滑的动画和交互效果**：基于官方库的稳定实现
- **响应式设计**：支持窗口大小调整
- **多版本支持**：提供传统CDN、现代ES6模块等多种实现方式
