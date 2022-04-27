var app = new Vue({
    el: '#app',
    template: `
    <div>
        <div>{{ message }}</div>
        <button @click="clickMe">按钮</button>
    </div>
    `,
    data() {
        return {
            message: '我是node后端pug中用vue渲染的页面'
        }
    },
    methods: {
        clickMe() {
            alert('你好！')
        }
    }
})