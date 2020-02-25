export default function({ $axios, redirect }) {

	$axios.interceptors.request.use(
		config=>{
			return config
		},
		error=>{
			return Promise.reject(error);
		}
	)


	$axios.interceptors.response.use(

		response=>{
			const res = response.data
			if(res.code == 200){
				return res
			}else{
				redirect('/404')
			}
			return Promise.reject(new Error(res.msg || 'Error'))
		},
		error => {
			console.log('err'+error)
			return Promise.reject(error)
		}
	)

	$axios.onError(err=>{
		const code = parseInt(error.response && error.response.status)
			if (code === 400) {
				redirect('/404')
			} else if (code === 500) {
				redirect('/500')
			}
	})
}