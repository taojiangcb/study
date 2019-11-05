### bable 的配置
- env：指定在不同环境下使用的配置。比如production和development两个环境使用不同的配置，就可以通过这个字段来配置。env字段的从process.env.BABEL_ENV获取，如果BABEL_ENV不存在，则从process.env.NODE_ENV获取，如果NODE_ENV还是不存在，则取默认值"development"
- plugins：要加载和使用的插件列表，插件名前的babel-plugin-可省略；plugin列表按从头到尾的顺序运行
- presets：要加载和使用的preset列表，preset名前的babel-preset-可省略；presets列表的preset按从尾到头的逆序运行（为了兼容用户使用习惯）
同时设置了presets和plugins，那么plugins的先运行；每个preset和plugin都可以再配置自己的option

#### presets
如果要自行配置转译过程中使用的各类插件，那太痛苦了，所以babel官方帮我们做了一些预设的插件集，称之为preset，这样我们只需要使用对应的preset就可以了。以JS标准为例，babel提供了如下的一些preset：
- es2015
- es2016
- es2017
- env
es20xx的preset只转译该年份批准的标准，而env则代指最新的标准，包括了latest和es20xx各年份另外，还有 stage-0到stage-4的标准成形之前的各个阶段，这些都是实验版的preset，建议不要使用。

.babelrc
```
{
  "presets": [
    
    [
      "@babel/preset-env",
      {
        "modules":false
      }
    ],
    [
      "@babel/preset-react",
      {
        "modules":false
      }
    ]
  ],
  "plugins": [],
  "compact": false
}
```