<script setup>
import {reactive} from 'vue'
import crypto from 'crypto-js'

const data = reactive({
    value:'',
    result:''
})

const sha1Handler = ()=>{
    data.result = ''
    data.result = crypto.SHA1(data.value)
}

</script>

<template>
    <h2>SHA1</h2>
    <el-divider></el-divider>
    <el-form label-position="top">
        <el-form-item label="待处理值">
            <el-input type="textarea" :rows="7" v-model="data.value" placeholder="待处理字符串"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="sha1Handler" style="width:100px;height:35px;">启动</el-button>
        </el-form-item>
        <el-form-item label="计算结果" style="display:inline-block;" v-if="data.result">
            <el-row style="width:100%;margin-top:5px;"><el-tag type="success">SHA1</el-tag>&nbsp;<el-tag type="success">Base32</el-tag></el-row>
            <el-row style="width:100%;margin-top:10px;">
                <el-input type="textarea" v-model="data.result" :rows="7" :readonly="true" style="width:400px;"></el-input>
            </el-row>
        </el-form-item>
    </el-form>
</template>

<style>
</style>