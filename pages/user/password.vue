<!--  -->
<template>
	<div class=''>

		修改密码
	</div>
</template>

<script>
export default {
	transition:'test',
	// validate ({ params }) {
	// 	// 必须是number类型
	// 	console.log(params)
	// 	// if(params.id){
	// 		return /^\d+$/.test(params.id)

	// 	// }else{
	// 	// 	return true
	// 	// }
  	// },
	components: {},
	data() {
		return {
			title:this.$route.params.title?this.$route.params.title:'测试动态title'
		};
	},
	head(){
		return{
			title:this.title,
			meta:[
				 { hid: 'description', name: 'description', content: 'My custom description' }
			]
		}
	},
	computed: {},
	watch: {},
	methods: {
	
	},
	created() {
	
	},
	mounted() {
	
	},
	}
</script>
<style lang='scss' scoped>
		
</style>