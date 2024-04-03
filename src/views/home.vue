<script setup>
import { ref,reactive } from "vue";

const data = reactive({
    message: 'Hello,World',
})


</script>

<template>
    <el-container id="site-container">
        <el-header id="site-header">
            <h1><router-link to="/">密码学工具</router-link></h1>
        </el-header>
        <el-main id="site-main">
            <router-view></router-view>
        </el-main>
        <el-footer id="site-footer">
            <div class="footer-info">
                <div class="badge">
                    <span class="badge-sub">
                        Github
                    </span>
                    <a href="https://github.com/CairBin/EncryWebTool" target="_blank">
                        <span class="badge-value" id="badge-github-value">
                            CryptoToolsWeb
                        </span>
                    </a>
                </div>
                 | 
                <div class="badge">
                    <span class="badge-sub">
                        Copyright
                    </span>
                    <a href="https://cairbin.top" target="_blank">
                        <span class="badge-value" id="badge-author-value">
                            &copy;&nbsp;2024&nbsp;CairBin
                        </span>
                    </a>
                </div>
            </div>
        </el-footer>
    </el-container>
</template>

<style scoped>

#site-container{
    height:100%;
    width:100%;
}

#site-header{
    background-color: #409eff;
    display: flex;
    align-items: center;
    color:#ffffff;
}

#site-footer{
    background-color: #ecf5ff;
    color:#ffffff;
    display: flex;
    align-items: center;
}


.footer-info{
    display: inline-block;
    border-radius: 4px;
    text-shadow: none;
    font-size: 12px;
    color: #fff;
    line-height: 15px;
    background-color: #abbac3;
    margin-bottom: 5px;
}

.badge{
    display: inline-block;
    background-color: #4d4d4d;
    padding:4px 4px 4px 0px;
    border-radius: 4px;
    color:white;
}

.badge .badge-sub{
    display: inline-block;
    background-color: #4d4d4d;
    padding: 4px 4px 4px 6px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color: white;
}

.badge .badge-value{
    display: inline-block;
    padding: 4px 6px 4px 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: white;
}

#badge-github-value{
    background-color:#007ec6;
}

#badge-author-value{
    background-color: #ffa500;
}

.router-link-active{
    text-decoration: none;
    color:#fff;
    cursor:pointer;
}

</style>