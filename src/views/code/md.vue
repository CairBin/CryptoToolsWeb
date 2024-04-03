<script setup>
import { reactive } from 'vue';
import crypto from 'crypto-js';
import cry from 'crypto';

const data = reactive({
    md5Form:{
        value:'',
        result:''
    }
})

const md5Handler = ()=>{
    data.md5Form.result = crypto.MD5(data.md5Form.value)
}

</script>

<template>
    <h2>MD5</h2>
    <el-divider />
    <el-form label-position="top">
        <el-form-item label="待处理值">
            <el-input v-model="data.md5Form.value" :rows="7" type="textarea" placeholder="待计算字符串">
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="md5Handler" style="width:100px;height:35px;">启动</el-button>
        </el-form-item>
        <el-form-item label="计算结果" style="display:inline-block;" v-if="data.md5Form.result">
            <el-row style="width:100%;margin-top:5px;">
                <el-tag type="success">MD5</el-tag>
                &nbsp;<el-tag type="success">Base32</el-tag>
            </el-row>
            <el-row style="width:100%;margin-top:10px;">
                <el-input type="textarea" v-model="data.md5Form.result" :rows="7" :readonly="true" style="width:400px;"></el-input>
            </el-row>
        </el-form-item>
    </el-form>
    
</template>

<style>

</style>