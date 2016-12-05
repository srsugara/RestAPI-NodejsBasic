const Mhs=require('../models/mahasiswa');

module.exports={
	getAll(req,res,next){
		//cara promise
		Mhs
			.find()
			.exec()
			.then(list=>{
				return res.json({
					meta:{
						code:200,
						message:'Daftar Mahasiswa',
					},
					data:list,
				})
			})
			.catch(ex=>{
				return res.json({
					meta:{
						code:500,
						message:ex.message,
					},
					data:{},
				})
			})
	},

	add(req,res,next){
		const mhs=new Mhs(req.body);
		mhs
			.save()
			.then(inserted=>{
				return res.json({
					meta:{
						code:200,
						message:'Mahasiswa tersimpan',
					},
					data:inserted,
				})
			})
			.catch(ex=>{
				return res.json({
					meta:{
						code:500,
						message:ex.message,
					},
				})
			})
	},

	getOne(req,res,next){
		const id=req.params.id;
		const query={
			_id:id,
		}
		Mhs
		.findOne(query)
		.then(result=>{
			if(!result){
				res.status(404);
				return res.json({
					meta:{
						code:404,
						message:'Mahasiswa tidak ditemukan',
					},
				})
			}
			return res.json({
				meta:{
					code:200,
					message:'Mahasiswa ditemukan',
				},
				data:result,
			})
		})
		.catch(ex=>{
			return res.json({
				meta:{
					code:500,
					message:ex.message,
				},
				data:{},
			})
		
		})
		
	},

	update(req,res,next){
		const update=req.body;
		const query={
			_id:req.params.id,
		}

		Mhs
		.findOneAndUpdate(query,update)
		.exec()
		.then(()=>{
			return res.json({
				meta:{
					code:200,
					message:'Mahasiswa berhasil diubah'
				}
			})
		})
		.catch(ex=>{
			return res.json({
				meta:{
					code:500,
					message:ex.message
				}
			})
		})
	},

	remove(req,res,next){
		const query={
			_id:req.params.id,
		}
		Mhs
		.findOneAndRemove(query)
		.exec()
		.then(()=>{
			return res.json({
				meta:{
					code:200,
					message:'Mahasiswa berhasil dihapus'
				}
			})
		})
		.catch(ex=>{
			return res.json({
				meta:{
					code:500,
					message:ex.message
				}
			})
		})
	}

	
};