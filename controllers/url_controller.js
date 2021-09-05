
const URL  = require('../models/url')
const shortid  = require('shortid')

const domain = 'http://192.168.43.68:3000';

exports.all = async function(req,res){
    const urls = await URL.find({is_active:true})
    res.json({
        success: 0,
        data: urls
    })
}

exports.create = async function(req,res){
    const {url}  = req.body
    if (url && url.trim()){
        var _url = await URL.findOne({url:url})
        if (_url){
            _url.shorted += 1
            await _url.save()
        }else{
            const code = shortid.generate()
            var short_url = `${domain}/${code}`
            _url = new URL({
                code: code,
                url:url,
                short_url:short_url
            })
            await _url.save()
        }
        res.json({
            success: 0,
            data: _url
        })
    }else{
        res.json({
            success: -1,
            error: 'Invalid URL'
        })
    }
}

exports.get = async function(req,res){
    const url = await URL.findOne({code:req.params.code})
    if (url){
        url.used +=1
        await url.save()
        return res.redirect(url.url)
    }else{
        return res.status(404).json('URL not found')
    }
}

exports.top = async function(req,res){
    const urls = await URL.find({is_active:true}).sort({used:-1}).limit(100)
    res.json({
        success: 0,
        data: urls
    })
}