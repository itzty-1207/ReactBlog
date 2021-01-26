import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author =()=>{
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" /></div>
            <div className="author-introduction">
                前端小司机一枚，专注于WEB和移动前端开发。来不及多说，快上车与我一同学习前端吧！
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="weibo"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )
}

export default Author