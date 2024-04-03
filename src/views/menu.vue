<script setup>

const codeMenu = [
    {
        title:"Hex(Base16)/Base32/Base64",
        content:"Base64、Base32、Base16(Hex)。",
        link:"base",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"HMAC",
        content:"基于哈希函数的消息认证码。",
        link:"hmac",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"MD5",
        content:"MD5。用于生成128位的散列值。",
        link:"md5",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"SHA1",
        content:"SHA1生成160位的散列值，常用于数字签名和完整性校验。",
        link:"sha1",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"SHA2",
        content:"SHA224、SHA256、SHA384和SHA512算法。",
        link:"sha2",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"SHA3",
        content:"SHA3-224、SHA3-256、SHA3-384和SHA3-512算法。",
        link:"sha3",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"SM3",
        content:"生成256位的散列值，中国国产杂凑算法。",
        link:"sm3",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"CRC32",
        content:"生成32位的校验和，常用于数据完整性和错误校验。",
        link:"/",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"Unicode",
        content:"Unicode是计算机科学领域里的一项业界标准，包括字符集、编码方案等。",
        link:"/",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"URL",
        content:"URL中的特殊字符转换为%xx的形式进行传输和处理，以确保URL的正确性和完整性。",
        link:"/",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"Punycode",
        content:"Punycode将Unicode字符转换为ASCII字符，用于在域名系统中处理国际化域名。",
        link:"/",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    },
    {
        title:"BLACKE2",
        content:"生成不同长度的摘要，具有较低的碰撞概率和高效率的计算能力。",
        link:"/",
        info:"none",
        logo:"https://cdn-icons-png.flaticon.com/512/25/25185.png"
    }

]


</script>

<template>
<!-- 内容菜单 -->
<h2 class="menu-title">字符编解码</h2>
<div class="masonry">
    <router-link v-for="item in codeMenu" :to="item.link">
    <el-card  class="masonry-item menu-card" shadow="hover" >
        <el-row>
            <el-avatar shape="square" :size="60" :src="item.logo" />
            <h4 style="margin-left:0.5em;">{{item.title}}</h4>
        </el-row>
        <el-row style="height:50px;" >
            <p style="font-size:14px; color:#777;text-overflow:ellipsis;overflow:hidden;">{{item.content}}</p>
        </el-row>
        <template #footer>
            <el-row style="width:100%;font-size:15px;" justify="space-between">
                <el-col :span="18" style="text-align:left;color:grey;">{{ item.info }}</el-col>
                <el-col :span="6" style="text-align:right;color:green;">
                    <el-icon><DArrowRight /></el-icon>
                </el-col>
            </el-row>
        </template>
    </el-card>
</router-link>
</div>
</template>

<style>
.router-link-active{
    text-decoration: none;
}

a{
    text-decoration: none;
}
</style>