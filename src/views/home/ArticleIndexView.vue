<template>
    <div class="container">
        <div class="row">
            
            <div class="col-9">
                <div class="card" style="margin-top: 20px; margin-bottom: 20px">
                    <div class="card-body">
                            <div class="h3" style="color: #2b73af;font-weight: bolder;">{{ article.title }}</div>
                            <div style="clear: both;">
                            <div class="row">
                                <div class="col-2" style=" width: 100%;">
                                    <v-md-preview :text="article.content" ></v-md-preview>
                                </div>
                            </div>
                            </div>
                            <div style="font-size: 18px; float: right;" >
                            <span v-if="isLiked(-article.id) === 0" @click="like(-article.id, now_user.id)" class="thumbs-up">
                                <svg t="1708516000233" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2819" width="25" height="25"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z" fill="#000000" p-id="2820"></path></svg>
                                {{ getLikeNum(-article.id).data }}
                                点赞
                            </span>
                            <span v-if="isLiked(-article.id) === 1" @click="dislike(-article.id, now_user.id)" class="thumbs-up">
                                <svg t="1709786266097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2824" width="25" height="25"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z" fill="#000000" p-id="2825"></path></svg>
                                {{ getLikeNum(-article.id).data }}
                                点赞
                            </span>
                            <span class="thumbs-up">
                                <svg t="1708516150190" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2958" width="28" height="28"><path d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m0 64c-200.298667 0-362.666667 162.368-362.666667 362.666667s162.368 362.666667 362.666667 362.666667 362.666667-162.368 362.666667-362.666667-162.368-362.666667-362.666667-362.666667z m21.141333 132.298667a54.762667 54.762667 0 0 1 29.312 29.749333l37.365334 91.456 96.693333 7.893334c30.122667 2.453333 52.352 29.013333 49.984 59.125333a55.104 55.104 0 0 1-18.677333 37.205333l-74.08 64.597334 22.666666 96.746666c6.88 29.333333-11.008 58.944-40.309333 66.058667a54.218667 54.218667 0 0 1-41.44-6.656L512 676.416l-82.666667 51.392a54.325333 54.325333 0 0 1-75.338666-18.346667 55.317333 55.317333 0 0 1-6.4-41.056l22.666666-96.746666-74.08-64.597334a55.253333 55.253333 0 0 1-5.909333-77.098666 54.421333 54.421333 0 0 1 37.216-19.242667l96.693333-7.893333 37.365334-91.445334c11.498667-28.128 43.584-41.6 71.594666-29.749333zM512 357.109333l-30.72 75.178667a54.592 54.592 0 0 1-46.037333 33.856l-81.024 6.613333 62.165333 54.197334a55.210667 55.210667 0 0 1 17.386667 54.186666l-18.805334 80.234667 68.373334-42.506667a54.218667 54.218667 0 0 1 57.312 0l68.373333 42.506667-18.794667-80.234667a55.210667 55.210667 0 0 1 17.386667-54.186666l62.165333-54.197334-81.024-6.613333a54.592 54.592 0 0 1-46.048-33.856L512 357.109333z" fill="#000000" p-id="2959"></path></svg>
                                2投币
                            </span>
                            <span v-if="isCollected(article.id) === 0" @click="collect(article.id)" class="thumbs-up">
                                <svg t="1708516305636" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3097" width="25" height="25"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z" fill="#000000" p-id="3098"></path></svg>
                                收藏
                            </span>
                            <span v-if="isCollected(article.id) === 1" @click="disCollect(article.id)" class="thumbs-up">
                                <svg t="1709796750700" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2824" width="25" height="25"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z" fill="#000000" p-id="2825"></path></svg>
                                取消收藏
                            </span>
                            <span class="thumbs-up" v-clipboard:success="success" @click="copy(article.title + '\n链接： http://localhost/article/' + article.id)">
                                <svg t="1708516387202" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3236" width="25" height="25"><path d="M853.333333 533.333333a32 32 0 0 1 64 0v266.666667c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V256c0-64.8 52.533333-117.333333 117.333333-117.333333h277.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v544a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V533.333333z m-42.058666-277.333333l-89.792-95.402667a32 32 0 0 1 46.613333-43.861333l140.544 149.333333C927.861333 286.485333 913.376 320 885.333333 320H724.704C643.029333 320 576 391.210667 576 480v192a32 32 0 1 1-64 0V480c0-123.296 94.784-224 212.704-224h86.570667z" fill="#000000" p-id="3237"></path></svg>
                                分享
                            </span>
                            <span @click="showCommand()" class="thumbs-up">
                                <svg t="1708554405986" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2819" width="25" height="25"><path d="M157.568 751.296c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288z m65.301333 3.786667l-17.258666 63.306666 63.306666-17.258666a32 32 0 0 1 24.522667 3.210666 4515.84 4515.84 0 0 1 32.352 18.944A360.789333 360.789333 0 0 0 512 874.666667c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512c0 60.586667 14.848 118.954667 42.826667 171.136 3.712 6.912 12.928 22.826667 27.370667 47.232a32 32 0 0 1 3.338666 24.714667z m145.994667-70.773334a32 32 0 1 1 40.917333-49.205333A159.189333 159.189333 0 0 0 512 672c37.888 0 73.674667-13.173333 102.186667-36.885333a32 32 0 0 1 40.917333 49.216A223.178667 223.178667 0 0 1 512 736a223.178667 223.178667 0 0 1-143.136-51.690667z" fill="#000000" p-id="2820"></path></svg>
                                评论
                            </span>
                            </div>
                    </div>
                    <!-- 评论区 -->
                    <div v-if="show_command === 1" style="padding-left: 10px; padding-right: 10px;">
                        
                        <hr class="border border-1 opacity-5" />
                        <div style="font-weight: bolder;">
                                评论区
                        </div>
                        <div class="input-group">
                            <!-- <span class="input-group-text">With textarea</span> -->
                            <textarea v-model="comment2ArticleData.content" class="form-control" aria-label="With textarea"></textarea>
                            <button @click="reply2Article()" class="btn btn-outline-secondary" type="button" id="button-addon2">发送</button>
                        </div>
                        <hr class="border border-1 opacity-5" />
                        <div >
                            <!-- 评论 -->
                            <div v-for="comment in comment_data" :key="comment.id">
                                <div class="row">
                                    <div class="col-1">
                                        <img src="@/assets/logo.png" width="50px"  alt="">
                                    </div>
                                    <div class="col-11">
                                        <div >
                                            <span style="font-weight: bolder;">{{ comment.authorName }}</span>
                                            <span style="color:gray; float:right;">{{ timeAgo(comment.createTime) }}</span>
                                        </div>
                                        <div>{{ comment.content }}</div>
                                        <div style="font-size: 18px;" >
                                            <span v-if="isLiked(comment.id) === 0" @click="like(comment.id, now_user.id)" class="thumbs-up">
                                            <svg t="1708516000233" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2819" width="25" height="25"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z" fill="#000000" p-id="2820"></path></svg>
                                            {{ getLikeNum(comment.id).data }}
                                            点赞
                                        </span>
                                        <span v-if="isLiked(comment.id) !== 0" @click="dislike(comment.id, now_user.id)" class="thumbs-up">
                                            <svg t="1709786266097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2824" width="25" height="25"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z" fill="#000000" p-id="2825"></path></svg>
                                            {{ getLikeNum(comment.id).data }}
                                            点赞
                                        </span>
                                            <span @click="showCommandSon(comment.id); comment2CommentData.authorId = now_user.id;comment2CommentData.authorName = now_user.username;comment2CommentData.authorAvatar = now_user.avatar;" class="thumbs-up">
                                                <svg t="1708554405986" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2819" width="25" height="25"><path d="M157.568 751.296c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288z m65.301333 3.786667l-17.258666 63.306666 63.306666-17.258666a32 32 0 0 1 24.522667 3.210666 4515.84 4515.84 0 0 1 32.352 18.944A360.789333 360.789333 0 0 0 512 874.666667c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512c0 60.586667 14.848 118.954667 42.826667 171.136 3.712 6.912 12.928 22.826667 27.370667 47.232a32 32 0 0 1 3.338666 24.714667z m145.994667-70.773334a32 32 0 1 1 40.917333-49.205333A159.189333 159.189333 0 0 0 512 672c37.888 0 73.674667-13.173333 102.186667-36.885333a32 32 0 0 1 40.917333 49.216A223.178667 223.178667 0 0 1 512 736a223.178667 223.178667 0 0 1-143.136-51.690667z" fill="#000000" p-id="2820"></path></svg>
                                                回复
                                            </span>
                                        </div>
                                        <div v-if="show_command_son === comment.id" class="input-group">
                                            <textarea v-model="comment2CommentData.content" class="form-control" aria-label="With textarea"></textarea>
                                            <button @click="reply2Comment()" class="btn btn-outline-secondary" type="button" id="button-addon2">发送</button>
                                        </div>
                                        <!-- 子评论 -->
                                    <div v-if="comment.children" >
                                        <div class="row" v-for="child in comment.children"  :key="child" style="padding: 0;">
                                            <div class="col-md-1">
                                                <img src="@/assets/logo.png" width="50px"  alt="">
                                            </div>
                                            <div class="col-md-11">
                                            <div >
                                                <span style="font-weight: bolder;">{{ child.authorName }}</span>
                                                <span style="color:gray; float:right;">{{ timeAgo(child.createTime) }}</span>
                                            </div>
                                            <div>{{ child.content }}</div>
                                        </div>
                                    </div>
                                        <hr class="border border-1 opacity-9" />
                                    </div>
                                    
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="margin-top: 20px">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <img :src="article_user.avatar" alt="" width="100%">
                            </div>
                            <div class="col-8">
                                <div style="font-weight: bolder;">
                                    作者： {{ article_user.username }}
                                </div>
                                <div>
                                    {{ article_user.introduction }}
                                </div>
                            </div>
                        </div>
                        <hr class="border border-1 opacity-5" />
                        <div class="row">
                            <div class="col-4" style="color: gray;font-weight: bolder;text-align: center;">
                                文章
                                <div style="color: black;">
                                    {{ now_user_info.article_num }}
                                </div>
                            </div>
                            <div class="col-4" style="color: gray;font-weight: bolder;text-align: center;">
                                获赞
                                <div style="color: black;">
                                    10086
                                </div>
                            </div>
                            <div class="col-4" style="color: gray;font-weight: bolder;text-align: center;">
                                粉丝
                                <div style="color: black;">
                                    {{ article_user.fanNum != null ? article_user.fanNum  : 0 }}
                                </div>
                            </div>
                        </div>
                        <div v-if="article_user.id !== now_user.id" class="row" style="padding-top: 10px;">
                            <div class="col" @click="focusOn()">
                                <button @click="follow()" v-if="isFollowing() === 0" class="btn btn-primary col-12">
                                    + 关注
                                </button>
                                <button @click="disfollow()" v-else class="btn btn-light col-12">
                                    已关注
                                </button>
                            </div>
                            <div class="col">
                                <button class="btn btn-outline-secondary col-12">发私信</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {articleDetailShowService, articleNumGetByUserIdService} from "@/api/article.js"
import {userInfoByIdService} from "@/api/user.js"
import {commentAddService, commentGetService} from "@/api/comment.js"
import commonUtil from '@/utils/alertUtil';
import { useUserInfoStore } from '@/stores/userInfo.js'
import { timeago } from '@/utils/formatTime'
import {commentLikeService, commentDislikeService, commentGetLikeNumService, commentIsLikedService} from '@/api/comment.js'
import {articleCollectService, articleDiscollectService, articleIsCollectedService} from "@/api/collect.js"
import { userFollowService, userDisfollowService, userIsfollowingService } from '@/api/follow.js';


export default {
    mounted() {
        // 文章信息
        let result = articleDetailShowService(this.id);
        this.article = result.data
        // 文章作者信息
        let res = userInfoByIdService(this.article.author)
        this.article_user = res.data
        // 文章评论数据
        this.comment2ArticleData.parentId = -this.article.id;
        this.comment2ArticleData.authorId = this.now_user.id;
        this.comment2ArticleData.authorName = this.now_user.username;
        this.comment2ArticleData.authorAvatar = this.now_user.avatar;
        // 评论信息
        let commentRes = commentGetService(-this.article.id)
        this.comment_data = commentRes.data
        // 文章数目 
        const userInfoStore = useUserInfoStore()
        this.now_user = userInfoStore.info
        this.now_user_info.article_num = articleNumGetByUserIdService(this.article.author).data
    },
    created() {
        this.id = this.$route.params.id
        const userInfoStore = useUserInfoStore()
        this.now_user = userInfoStore.info
        
    },
    data() {
        return {
            id: 1,
            article: {},
            article_user: {},
            comment_data:{},
            show_command : -1,
            is_focus_on: -1,
            comment2ArticleData:{
                "parentId":0,
                "content":"",
                "authorId":0,
                "authorName":"",
                "authorAvatar":""
            },
            comment2CommentData:{
                "parentId":0,
                "content":"",
                "authorId":0,
                "authorName":"",
                "authorAvatar":""
            },
            show_command_son: 0,
            now_user:{},
            now_user_info:{
                article_num: 0
            }
        }
    },
    methods: {
        
        success() {
            commonUtil.message("复制成功，去分享吧！", "success");
        },
        // 复制到剪贴板
        copy(res){
            this.$clipboard(res);
        },
        // 是否展示评论区
        showCommand(){
            this.show_command = -this.show_command;
        },
        focusOn(){
            this.is_focus_on = -this.is_focus_on;
        },
        // 添加评论
        reply2Article(){
            let result = commentAddService(this.comment2ArticleData)
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
                this.comment2ArticleData.content = ""
            }
            // 评论信息
            let commentRes = commentGetService(-this.article.id)
            this.comment_data = commentRes.data
        },
        reply2Comment(){
            let result = commentAddService(this.comment2CommentData)
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
                this.comment2CommentData.content = ""
            }
            // 评论信息
            let commentRes = commentGetService(-this.article.id)
            this.comment_data = commentRes.data
        },
        timeAgo(val) {
            return timeago(val)
        },
        showCommandSon(id){
                this.comment2CommentData.content = ""
                this.show_command_son = id
                this.comment2CommentData.parentId = id
        },
        // 点赞
        like(infoId, likeUserId){
            commentLikeService(infoId, likeUserId);
            let result = articleDetailShowService(this.id);
            this.article = result.data
        },
        // 取消点赞
        dislike(infoId, likeUserId){
            commentDislikeService(infoId, likeUserId);
            let result = articleDetailShowService(this.id);
            this.article = result.data
        },
        getLikeNum(infoId){
            return commentGetLikeNumService(infoId)
        },
        // 判断是否已经点赞
        isLiked(infoId){
            return commentIsLikedService(infoId).data;
        },
        // 收藏
        collect(articleId){
            articleCollectService(articleId);
            let result = articleDetailShowService(this.id);
            this.article = result.data
        },
        disCollect(articleId){
            articleDiscollectService(articleId);
            let result = articleDetailShowService(this.id);
            this.article = result.data
        },
        // 判断是否已经收藏
        isCollected(articleId){
            return articleIsCollectedService(articleId).data
        },
        // 关注
        follow(){
            if(userIsfollowingService(this.now_user.id, this.article_user.id).data === 1){
                return;
            }
            userFollowService(this.article_user.id);
            let res = userInfoByIdService(this.article.author)
            this.article_user = res.data
        },
        disfollow(){
            if(userIsfollowingService(this.now_user.id, this.article_user.id).data === 0){
                return;
            }
            userDisfollowService(this.article_user.id);
            let res = userInfoByIdService(this.article.author)
            this.article_user = res.data
        },
        isFollowing(){
            return userIsfollowingService(this.now_user.id, this.article_user.id).data;
        }
    },

}
</script>

<style>
.thumbs-up{
    margin-right: 20px;
    cursor:pointer;
    color: gray;
}
</style>