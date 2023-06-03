# umi+qiankun+typescript  demo

## 快速运行
1.git clone
2.yarn
3.yarn start

## 目录结构
dist:构建产物
config:构建时配置
mock:模拟数据
src:源文件
    .umi:临时运行文件目录，会被自动加入到gitignore
    components:组件
    layouts:分层
    models:全局数据
    pages:页面
    global.less:全局样式
.editorconfig:编辑器配置
tsconfig.json:ts配置
typings.d.ts:声明模块
package.json:项目依赖包配置

## 页面结构
    /第一层first-tier
        /users(/重定向到/users)
        /personal-center(/personal-center重定向到personal-center/personal-center-1)
        第二层second-tier
                /personal-center/personal-center-1
                /personal-center/personal-center-2
                /personal-center/personal-center-3
                /personal-center/personal-center-4
                /personal-center/personal-center-5
## 存在问题
2.监听路由应该用路径判断，还是用传过来id判断?
3.侧边栏设置长度没用，顶部栏设置宽度有用？如果做到样式不耦合，是给每个content单独设置一个样式吗？
4.如果把页面级数据都放到全局，会有什么问题？
5.useEffect可以模拟挂载和更新，subscription也可以，用哪个，很多相同功能东西统一规范该用哪个？比如connect和useSelector
6.点击导航栏，可以触发组件切换事件，可以触发subscription,可以触发组件挂载生命周期，可以触发路由跳转，逻辑应该写在哪？

## 数据控制要点
1.在subscription中监听路由变化控制侧边栏是否显示/顶部导航栏高亮，数据存在全局
2.在users页面中通过props直接与子组件交互数据,因为和其他页面无关,不需要仓库存数据
3.表单存在于modal中,users和modal交互,modal和form交互
4.点击编辑,绑定record到本条数据,并且显示modal,在modal中用record初始化数据,modal需要forceRender,点击提交,从表单中取data,从record中取id,传到effects,effects去call service
5.点击删除,绑定record到本条数据,点击yes,传递id到effects,再call api删除数据
6.从添加处打开modal,就清空record,再用record.id判断是添加还是修改,从而触发对应dispatch,dispatch都是在users界面触发,因为要从record中取值,record+modal传过来的数据,进行dispatch