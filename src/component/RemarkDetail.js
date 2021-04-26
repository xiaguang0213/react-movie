import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Typography } from 'antd'
const { Text } = Typography;
export class RemarkDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount(){
        // 获取传递的参数并发起请求
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <h2 style={{textAlign:'center'}}>Title</h2>
                <div style={{padding:'20px  200px',fontSize:'20px'}}>
                    <Text mark strong code>《西虹市首富》上映首周，口碑没有前几部作品那么响了，票房依然强势，看来开心麻花的喜剧霸主地位难以撼动。

看完这部片子，我个人的感受是笑点一般，女主角的演技也比较一般，不过本片的剧本还是挺有料的，且听我慢慢道来。


虽然《西虹市首富》不是开心麻花的原创剧本，而是改编的国外剧本，不过一个好剧本不分原创还是改编。

作为一部喜剧，除了引人发笑以外，对现实的辛辣讽刺也是本片的一大看点，而本片中很多讽刺段子，在现实中都有故事原型。

也许很多影迷对这些故事原型并不了解，看完下面的分析，或许能让你更加理解影片的讽刺意义。

巴菲特午餐
《西虹市首富》中，王多鱼为了尽快花光10个亿，豪掷4000万拍得与股神巴菲特共进午餐的一次机会。片中的这次聚餐，王多鱼和巴菲特并没有什么实质性的交流，但是这次会面却在股市掀起巨大的舆论效应，导致王多鱼瞎买的夕阳产业股票大涨，净赚一个亿。

现实中，“与巴菲特共进午餐”的慈善拍卖活动自2000年开始，已经举办了18次，价格从最初的2.5万美元，一路涨到300多万美元，所得善款全部捐给美国的慈善机构。


目前为止的18次“巴菲特午餐”中，除去几次由匿名人士参加，共有3名中国人竞拍到与巴菲特的见面机会，分别是：

2006年，步步高创始人段永平，拍入价格62万美元；

2008年，“私募教父”赵丹阳，拍入价格211万美元；

2015年，天神娱乐董事长朱晔，拍入价格235万美元。

其中，因为与巴菲特吃了一顿饭在股市净赚一个亿的，就是有着“中国私募教父”之称的赵丹阳。

据说午餐当日，赵丹阳向巴菲特推荐了一支股票（物美商业），尽管巴菲特只是礼节性的表示会适当关注这只股票，消息传出后该股依然暴涨，短短几天，赵丹阳就狂赚1.3亿美元。

花两百万吃顿饭值不值？


不过这件事之后，巴菲特午餐就多了一个“潜规则”：不准在午餐上聊个股。

至于其他两位中国企业家，段永平的VIVO和OPPO两个手机品牌已经家喻户晓，朱晔也因为与巴菲特吃了一顿午餐，导致他的天神娱乐股价大涨。

然而在2018年5月，朱晔因涉嫌违反证券法律法规，被证监会立案调查。

另外王多鱼在瞎投资时，舍弃一路上涨的朝阳产业，专投赔钱的夕阳产业，反倒大赚了一笔，其实也是在讽刺那些跟风投资、创业的人。

这些年的创业圈，每年都要换一个主题，从前几年的VR、P2P，到后来的无人机、共享经济，再到今年的区块链，往往是“一拥而上，一哄而散”，圈钱炒作的多，脚踏实地的少，待到热度褪去，空留一地鸡毛。

全城示爱
《西虹市首富》中，王多鱼为了尽快花光10个亿，还承包了全城的烟花，办了一场声势浩大的烟火秀，误打误撞赶上了女主角夏竹的生日，索性又包下全城的广告位，对夏竹高调示爱。


现实中，也有个土豪为了取悦红颜，搞了一场轰轰烈烈的全城告白，这就是“南京煌太后”事件。

2017年7月28日，南京新街口商业区的广告大楼突然上演一段长达10个小时的灯光秀，内容为“祝邓煌生日快乐”等字样，还有空中直升机全城航拍，震惊南京全城。


据网友爆料，当事人邓煌为江苏某广播电台的美女主播，因为高调奢靡的庆生方式，她被网友戏称为“南京煌太后”。不久后有流言传出，说此次庆生灯光秀的花费约在600万元以上，因此有网友质疑该主播收入的合法性，还有人怀疑其中是否有政商勾结等腐败问题。

后来江苏网警对此辟谣，表示“600万灯光秀庆生”、”、“官商勾结、包养情妇”等纯属网络谣言，并对造谣者依法处理。

虽然被证实不存在腐败问题，该美女主播高调炫富的庆生方式还是引起了网友的反感，尤其是在公共场合，即使是脑残粉承包广告位为偶像庆生，也会招来骂声一片吧。

必贵园
《西虹市首富》里面有个一闪而过的镜头，是写着“必贵园”三个字的房地产广告牌，这个“必贵园”其实就是影射碧桂园。

当然“必贵园”这个外号几年前在网上就有了，因为以碧桂园为代表的一批房地产商，这些年开发完一线城市的土地，转进三四线城市，哄抬当地房价，所以被人戏称为“必贵园”。

也许是个非常应景的巧合，《西虹市首富》上映前不久，碧桂园的房子接连爆出质量问题，先是上海一在建售楼处坍塌1死9伤，后有安徽六安一工地围墙和活动板房坍塌，造成6人死亡。尤其是2018年7月，碧桂园连续发生3起安全事故，引起广泛关注。

碧桂园的广告词是“给你一个五星级的家”，然而接连发生的安全事故，以及频繁曝出偷工减料、监守自盗的丑闻，让网友把这段广告词改成多个版本：

必贵园，给你一个五星级的坟；

必贵园，给你一个五星级的代价；

必贵园，给你一个五星期造的家......


其他想说的
除了必贵园，《西虹市首富》里还有不少对现实企业、团体的恶搞，例如哔哔打车、厂州恒太、台湾茶叶蛋......其实还有一个被影片删掉了，就是对AC米兰的恶搞。

影片上映前，有AC米兰的球迷在预告片中发现了这处恶搞，感觉受到了冒犯，于是就向片方抗议，最终片方向球迷们道歉，并且紧急删除了这段戏份。（还好巴菲特、碧桂园没找片方抗议）


可能是紧急删除戏份的缘故，导致《西虹市首富》的宣传、点映工作也一度非常靠后，乃至于被外界猜测是片方信心不足，才迟迟不肯举办媒体提前点映活动，可谓一波三折。

现在喜剧片不好做，很大一个原因也是恶搞的界限不好把握，就像国产恐怖片不能有鬼一样，国产喜剧也是在钢丝上跳舞。

其实这些年真正能让我笑成傻逼的电影，印象中只有萨莎·拜伦·科恩的屎尿屁恶俗喜剧（《王牌贱谍》、《独cai者》、《波拉特》等等），不过现在美国电影在政治正确的风气下也日渐趋于保守了。

前不久Netflix发布了一部黑色喜剧《永不满足》的预告片，讲的是一名肥妞在减肥成功后变成身材火辣的美少女，然后报复那些曾经欺负过她的人，网上很快有人请愿抵制这部剧集，因为其涉嫌“歧视胖子”。


与此同时呢，法国也有一部喜剧电影在大陆院线上映，就是《的士速递5》。

作为一部法国电影，《的士速递5》非常放得开，片中同样有一个身材肥胖的女性角色，还有一名侏儒，而编剧在片中肆无忌惮的拿这两个角色开涮，台词中还穿插了好多地域黑的段子。


法国人一向不叼美国的“政治正确”，毕竟在他们看来，好莱坞的me too运动也有些矫枉过正。

其实对于喜剧片恶搞的限度，未经对方同意的恶搞当然是不正确的，如果征得了当事人同意，或者是无伤大雅的恶搞，吃瓜群众也无需多言吧</Text>
                </div>
                
            </div>
        )
    }
}

export default RemarkDetail
