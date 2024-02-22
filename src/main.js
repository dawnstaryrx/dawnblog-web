import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 编辑器
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
// 编辑器Tip提示信息
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index.js';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
// emoji
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
// katex 还需要在index.html中引入cdn
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
// mermaid
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
// todo
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
// 代码行号
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// 快速复制
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// 内容定位
import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align';
// highlightjs 核心代码
import hljsc from 'highlight.js/lib/core';
// 按需引入语言包
import c from 'highlight.js/lib/languages/c.js';
import cpp from 'highlight.js/lib/languages/cpp';
import css from 'highlight.js/lib/languages/css';
import django from 'highlight.js/lib/languages/django';
import go from 'highlight.js/lib/languages/go';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import matlab from 'highlight.js/lib/languages/matlab';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
// 引入预览组件
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// 复制链接
import Clipboard from 'v-clipboard'


VMdPreview.use(githubTheme, {
    Hljs: hljs,
});


hljsc.registerLanguage('c', c);
hljsc.registerLanguage('cpp', cpp);
hljsc.registerLanguage('css', css);
hljsc.registerLanguage('django', django);
hljsc.registerLanguage('go', go);
hljsc.registerLanguage('java', java);
hljsc.registerLanguage('javascript', javascript);
hljsc.registerLanguage('matlab', matlab);
hljsc.registerLanguage('python', python);
hljsc.registerLanguage('sql', sql);


VMdEditor.use(githubTheme, {Hljs: hljs,});
VMdEditor.use(createTipPlugin());
VMdEditor.use(createEmojiPlugin());
VMdEditor.use(createKatexPlugin());
VMdEditor.use(createMermaidPlugin());
VMdEditor.use(createTodoListPlugin());
VMdEditor.use(createLineNumbertPlugin());
VMdEditor.use(createCopyCodePlugin());
VMdEditor.use(createAlignPlugin());

const app = createApp(App);

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(VMdEditor);
app.use(VMdPreview);
app.use(Clipboard)


app.mount('#app')

