# Getting Started with Create React App

# 项目

    本项目为：模仿网页版网易云音乐
    后台接口由网络提供：https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%8e%a5%e5%8f%a3%e6%96%87%e6%a1%a3

# 项目技术栈

  1.函数式组件、react hooks

  2.redux、react-redux、redux-thunk

  3.react-router(6)

  4.styled-components

  5.AntDesign

# 项目规范

  1.文件夹、文件名称统一采用小写，多个单词使用（-）连接

  2.变量名采用"小驼峰"标识，常量全部使用大写，组件采用"大驼峰"标识

  3.css采用 普通css 结合 styled-components

  4.整个项目使用函数式组件，全面使用react hook

  5.所有的函数式组件，为了避免不必要的渲染，全部采用memo进行包裹

  6.组件内部的状态可以使用useState进行管理，业务数据全部放在redux中进行管理

  7.函数组件内部代码书写顺序
      组件内部状态和props
      redux hooks
      其他 hooks
      其他逻辑代码
      返回JSX

  8.redux项目规范
      每个模块有自己独立的reducer，通过combineReducer进行合并；
      异步请求代码使用redux-thunk，并且写在actionCreators中； 
      redux直接采用redux hooks方式编写，不再使用connect；

  9.网络请求规范
      网络请求采用axios
      对axios进行二次封装（以后如果axios不再维护或出现问题，可以只在一处对axios进行修改，不用再在每个使用axios的组件内部修改，增加可维护性）

  10.路由规范
      本项目采用react-router(6)版本，（router6版本相较于5版本有较大改动）

  11.本项目部分组件采用AntDesign库中提供的组件

  12.组件内部导入模块顺序
      内置模块
      功能性文件
      组件（先第三方组件，再自己项目中的组件）
      内部样式文件   
