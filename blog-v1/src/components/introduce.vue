<template>
    <div class="introduce">
        <img class="introduce_img" src="@/assets/logo.png"/>
        <div class="introduce_body">
            <label> Vue.js 공부를 합니다!</label>
            <p>{{ introduce_content }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "introduce",
    data() {
        return {
            introduce_content: 'Vue.js 를 비롯한 웹 프로그래밍을 공부하면서 만들어가는 블로그입니다.'
        }
    },
}
</script>
<style scoped>
    .introduce {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 20px;
        background: #eeeeee;  
    }

    .introduce_body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .introduce_body label {
        font-size: 25px;
        font-weight: bold;
    }

    @media screen and (max-width: 600px) {
        
        .introduce {
            width: 100%;
            height: 300px;
        }

         .introduce_body label {
            font-size: 20px;
            font-weight: bold;
        }

        .introduce_body p {
            font-size: 13px;
            word-break: keep-all;
        }

    }

</style>