<template>
    <body>
        <h1>|About me</h1>
        <div class="profile">
            <h2>Profile</h2>
            <img src="src/icon.png" alt="">

            <div class="profile-content">
                <div class="name">
                    <h2>松下 文太</h2>
                    <h3>handle : Buntako</h3>
                </div>
                <div class="univercity">
                    <p>公立はこだて未来大学</p>
                    <p>システム情報科学部 複雑系知能学科 複雑系コース 2年</p>
                </div>

            </div>
        </div>
        <div class="skill">
            <h2>Skill</h2>
            <h3> - 言語歴 - </h3>
            <el-table :data="skillTable" height="100%" style="width: 100%;">
                <el-table-column prop="lang" label="Language" />
                <el-table-column prop="icon" label="" />
                <el-table-column prop="year" label="Year" />
                <el-table-column prop="framework" label="Framework" />
            </el-table>

            <ul class="slider">
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" /></li>
                <li><img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" />
                </li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/uwsgi/uwsgi-plain.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original-wordmark.svg" />
                </li>
            </ul>

            <div class="certification">
                <h3> - 資格・試験 - </h3>
                <table class="certification-table">
                    <tr>
                        <th>name</th>
                        <th>date</th>
                    </tr>
                    <tr>
                        <td>ITパスポート</td>
                        <td>2021/06</td>
                    </tr>
                    <tr>
                        <td>基本情報技術者試験</td>
                        <td>2022/10</td>
                    </tr>
                    <tr>
                        <td>応用情報技術者試験</td>
                        <td>2022/10</td>
                    </tr>
                </table>
            </div>
            <div class="service">
                <h3> - 使用サービス - </h3>
                <div class="service-content">
                    <ul class="slider">
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" />
                        </li>
                        <li>
                            <svg viewBox="0 0 128 128">
                                <path
                                    d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"
                                    fill="white"></path>
                            </svg>
                        </li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" /></li>
                        <li><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain-wordmark.svg" />
                        </li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /></li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" /></li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" /></li>
                        <li><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />
                        </li>
                        <li><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" />
                        </li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" />
                        </li>
                        <li><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" />
                        </li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" /></li>
                        <li><img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" />
                        </li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg" /></li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" /></li>
                    </ul>
                </div>
            </div>


        </div>

        <div class="timeline">
            <h2>time line</h2>
            <el-timeline>
                <el-timeline-item timestamp="2009/9" placement="top">
                    <el-card>
                        <h4>愛知県豊橋市　生まれ</h4>
                        <p></p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2010/4" placement="top">
                    <el-card>
                        <h4>愛知県豊橋市立芦原小学校　入学</h4>
                        <p></p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2016/3" placement="top">
                    <el-card>
                        <h4>愛知県豊橋市立芦原小学校　卒業</h4>
                        <p></p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2016/4" placement="top">
                    <el-card>
                        <h4>愛知県豊橋市立本郷中学校　入学</h4>
                        <p>生徒会総務を経験</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2016年3月" placement="top">
                    <el-card>
                        <h4>愛知県豊橋市立芦原小学校　卒業</h4>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2016年4月" placement="top">
                    <el-card>
                        <h4>愛知県豊橋市立本郷中学校　入学</h4>
                        <p>生徒会総務を経験</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2019年3月" placement="top">
                    <el-card>
                        <h4>愛知県豊橋市立本郷中学校　卒業</h4>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2019年4月" placement="top">
                    <el-card>
                        <h4>愛知県豊橋南高等学校　普通科教育コース　入学</h4>
                        <p>生徒会書記・副会長・会長を経験</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2020年8月" placement="top">
                    <el-card>
                        <h4>考古学協会　高校生ポスターセッション　参加</h4>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2021年3月" placement="top">
                    <el-card>
                        <h4>世界遺産検定　小論文コンテスト　優秀賞</h4>
                        <p>
                            <NuxtLink to="https://www.sekaken.jp/ronbun_kekka/">世界遺産検定　小論文コンテスト</NuxtLink>
                        </p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2021年6月" placement="top">
                    <el-card>
                        <h4>ITパスポート取得</h4>
                        <img src="src/Ipass.png" alt="">
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2022年3月" placement="top">
                    <el-card>
                        <h4>愛知県豊橋南高等学校　卒業</h4>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2022年4月" placement="top">
                    <el-card>
                        <h4>公立はこだて未来大学システム情報科学部　入学</h4>
                        <p>高度ICT演習にてFun-i－Conで活動。上流工程からシステム開発までを行った。</p>
                        <p>
                            <NuxtLink to="https://sites.google.com/view/2022-ict">高度ICT演習</NuxtLink>
                        </p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2022年8月" placement="top">
                    <el-card>
                        <h4>株式会社いい生活様　サマーインターン参加</h4>
                        <p>一週間のサマーインターンでvue.jsを使用したWebサイトの開発を行った。チームリーダーを担当し、チーム開発での大変さを知った。</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2022年10月" placement="top">
                    <el-card>
                        <h4>基本情報技術者　取得</h4>
                        <h4>応用情報技術者　取得</h4>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2023年4月" placement="top">
                    <el-card>
                        <h4>同学部　複雑系知能学科　複雑系コース　配属</h4>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2023年5月" placement="top">
                    <el-card>
                        <h4>株式会社いい生活様　長期インターンシップ</h4>
                        <p>C# wpf アプリケーションの作成に従事</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </body>
</template>



<script setup lang="ts">
const skillTable = [
    {
        lang: 'C',
        icon: '<i class="devicon-c-plain"></i>',
        year: '4',
        framework: ''
    },
    {
        lang: 'Python',
        icon: '<i class="devicon-python-plain"></i>',
        year: '4',
        framework: 'Django, Flask, Pyxel'
    },
    {
        lang: 'Processing',
        icon: '<i class="devicon-processing-plain"></i>',
        year: '1',
        framework: ''
    },
    {
        lang: 'HTML / CSS',
        icon: '<i class="devicon-html5-plain"></i> / <i class="devicon-css3-plain"></i>',
        year: '2',
        framework: ''
    },
    {
        lang: 'JavaScript',
        icon: '<i class="devicon-javascript-plain"></i>',
        year: '1',
        framework: ''
    },
    {
        lang: 'TypeScript',
        icon: '<i class="devicon-typescript-plain"></i>',
        year: '0.1',
        framework: ''
    },
    {
        lang: 'Vue.js',
        icon: '<i class="devicon-vuejs-plain"></i>',
        year: '0.1',
        framework: ''
    },
    {
        lang: 'Kotlin',
        icon: '<i class="devicon-kotlin-plain"></i>',
        year: '0.3',
        framework: ''
    },
]

</script>

<style>
img,
svg {
    width: 10%;
}

body {
    margin: 10%;
}

</style>
