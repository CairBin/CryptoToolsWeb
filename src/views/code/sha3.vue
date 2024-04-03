<script setup>
import crypto from 'crypto-js'
import { reactive } from 'vue';
const data = reactive({
    value:'',
    result:'',
    type:224
})

const sha3Handler = ()=>{
    data.result = ''
    data.result = crypto.SHA3(data.value,{
        outputLength:data.type
    })
}

</script>

<template>
    <h2>SHA3</h2>
    <el-divider>        
    </el-divider>
    <el-form label-position="top">
        <el-form-item label="待处理值">
            <el-input v-model="data.value" placeholder="待处理字符串" type="textarea" :rows="7"></el-input>
        </el-form-item>
        <el-form-item required label="长度">
            <el-radio-group v-model="data.type" @change="data.result=''">
                <el-radio :value="224">SHA3-224</el-radio>
                <el-radio :value="256">SHA3-256</el-radio>
                <el-radio :value="384">SHA3-384</el-radio>
                <el-radio :value="512">SHA3-512</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="sha3Handler" style="width:100px;height:35px;">启动</el-button>
        </el-form-item>
        <el-form-item label="计算结果" style="display:inline-block;" v-if="data.result">
            <el-row style="width:100%;margin-top:5px;">
                <el-tag type="success">SHA3</el-tag>&nbsp;
                <el-tag type="success">SHA3-{{data.type}}</el-tag>
            </el-row>
            <el-row style="width:100%;margin-top:10px;">
                <el-input type="textarea" v-model="data.result" :rows="7" :readonly="true" style="width:400px;"></el-input>
            </el-row>
        </el-form-item>
    </el-form>
</template>

<style>
</style>