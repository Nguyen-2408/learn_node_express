import { NewsModel } from "../models/NewsModel.js"
export const getNews = async (req, res) => {
    try {
       /*   const _news = new NewsModel({
            title: "Amplifying Black Voices for Black History Month",
            subTitle: "Riot Noir, our RIG for Black Rioters, spent the month highlighting Black culture, inspiring the next generation, and amplifying Black stories in gaming.",
            imageUrl: "https://www.riotgames.com/darkroom/1000/231feb0372550ecf40a01173020aaa1c:4d795630bdc377020e2cdb393f64a6ef/bhm-key-art.png",
            tag: "inside riot",
            urlNews: "https://www.riotgames.com/en/news/black-history-month-riot-games"

        }) 

        _news.save()
        .then(() => {
            console.log("save success")
        })
        .catch((err) => {
            console.log(err)
        })
             */
        
        const news = await NewsModel.find()
            .sort({createdAt: -1})
        /* console.log('news', news) */
        res.status(200).json(news)
    }catch (err) {
        res.status(500).json({ error: err })
    }
}

