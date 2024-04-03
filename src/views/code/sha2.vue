<script setup>
import crypto from 'crypto-js'
import { reactive } from 'vue';
const data = reactive({
    value:'',
    result:'',
    type:'sha224'
})

const sha2Handler = ()=>{
    data.result = ''
    switch(data.type){
        case 'sha224':
            return crypto.SHA224(data.value)
        case 'sha256':
            return crypto.SHA256(data.value)
        case 'sha384':
            return crypto.SHA384(data.value)
        case 'sha512':
            return crypto.SHA512(data.value)
        default:
            break;
    }
}

</script>

<template>
    <h2>SHA2</h2>
    <el-divider>        
    </el-divider>
    <el-form label-position="top">
        <el-form-item label="待处理值">
            <el-input v-model="data.value" placeholder="待处理字符串" type="textarea" :rows="7"></el-input>
        </el-form-item>
        <el-form-item required label="算法选择">
            <el-radio-group v-model="data.type" @change="data.result=''">
                <el-radio value="sha224">SHA224</el-radio>
                <el-radio value="sha256">SHA256</el-radio>
                <el-radio value="sha384">SHA384</el-radio>
                <el-radio value="sha512">SHA512</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="data.result = sha2Handler()" style="width:100px;height:35px;">启动</el-button>
        </el-form-item>
        <el-form-item label="计算结果" style="display:inline-block;" v-if="data.result">
            <el-row style="width:100%;margin-top:5px;">
                <el-tag type="success">SHA2</el-tag>&nbsp;
                <el-tag type="success">{{data.type}}</el-tag>
                &nbsp;<el-tag type="success">Base32</el-tag>
            </el-row>
            <el-row style="width:100%;margin-top:10px;">
                <el-input type="textarea" v-model="data.result" :rows="7" :readonly="true" style="width:400px;"></el-input>
            </el-row>
        </el-form-item>
    </el-form>
</template>

<style>
</style>