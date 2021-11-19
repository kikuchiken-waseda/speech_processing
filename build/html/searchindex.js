Search.setIndex({docnames:["implementation/cepstrum","implementation/index","implementation/test","implementation/test_torch","index","pachouli/acoustic_feature","pachouli/acoustic_wave","pachouli/cepstrum","pachouli/convolution","pachouli/filter","pachouli/index","pachouli/level","pachouli/mfcc","pachouli/mgcs","pachouli/nbsphinx","pachouli/scale","pachouli/spectrum","pachouli/visualization","pachouli/wave_equation","paper/an_overview","paper/index","processing/fourier","processing/index","processing/laplace"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,nbsphinx:3,sphinx:56},filenames:["implementation/cepstrum.ipynb","implementation/index.rst","implementation/test.ipynb","implementation/test_torch.ipynb","index.rst","pachouli/acoustic_feature.rst","pachouli/acoustic_wave.rst","pachouli/cepstrum.rst","pachouli/convolution.rst","pachouli/filter.rst","pachouli/index.rst","pachouli/level.rst","pachouli/mfcc.rst","pachouli/mgcs.rst","pachouli/nbsphinx.ipynb","pachouli/scale.rst","pachouli/spectrum.rst","pachouli/visualization.rst","pachouli/wave_equation.rst","paper/an_overview.rst","paper/index.rst","processing/fourier.rst","processing/index.rst","processing/laplace.rst"],objects:{},objnames:{},objtypes:{},terms:{"0":[0,14,18,21,23],"03648":19,"0x7fa50fb11b50":3,"1":[0,2,3,5,21],"10":[0,5,11],"1024":21,"12":[5,21],"160":0,"16000":0,"17":0,"18":0,"19":0,"1j":0,"2":[0,2,5,16,21],"20":5,"2008":19,"2048":[0,21],"220":0,"2ahukewid17zfsu_zahwrzd4kht":15,"2f":15,"2f85":15,"2fspeechresearch":15,"2yzs7gpq8aqzii3tmp":15,"3":[0,5],"3a":15,"4":[0,2],"42025":[],"440":0,"46":0,"5":0,"512":[0,21],"54":0,"6":[0,3,5],"66":18,"66_kj00006579568":18,"7":[0,14],"72":21,"72_764":21,"8":[0,3,14,15],"82":[7,9,21],"83":[5,7,9,21],"88":7,"880":0,"89":[9,21],"8f":21,"9":[0,3,18],"90":9,"91":9,"95":[9,21],"97":7,"99":5,"9b":21,"9c":5,"9f":[5,6],"\u3042\u308b\u3044\u306f\u5207\u308a\u51fa\u3055\u308c\u305f\u6709\u9650\u9577\u4fe1\u53f7\u306f":21,"\u3042\u308b\u6642\u9593":18,"\u304a\u3088\u305d16\u30d8\u30eb\u30c4\u304b\u30892\u4e07\u30d8\u30eb\u30c4\u306e\u3082\u306e\u3092\u3044\u3046":[],"\u304a\u3093\u3071":[],"\u304c\u3068\u3089\u308c\u308b\u3053\u3068\u304c\u591a\u3044":21,"\u304c\u5b9a\u7fa9\u3055\u308c\u308b":21,"\u304c\u89e3\u6790\u306e\u5834\u3067\u306f\u30b9\u30da\u30af\u30c8\u30e9\u30e0\u3068\u3057\u3066\u7528\u3044\u3089\u308c\u308b":16,"\u3053\u3046\u3057\u3066\u5206\u5272\u3055\u308c\u305f\u6709\u9650\u9577\u4fe1\u53f7\u306b\u96e2\u6563\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u3092\u9069\u5fdc\u3059\u308b\u3053\u3068\u3067":21,"\u3053\u3053\u3067":21,"\u3053\u3053\u3067\u306f\u305d\u306e\u6642\u9593\u3092\u6b63\u898f\u5316\u6642\u9593\u3068\u547c\u3076\u3053\u3068\u3068\u3057":21,"\u3053\u3053\u3067\u306f\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u671f\u3092":21,"\u3053\u306e\u4e16\u306e\u95a2\u6570\u306f":21,"\u3053\u306e\u5909\u4f4d\u306f\u4e00\u5b9a\u306e\u5f62\u3092\u4fdd\u3063\u305f\u307e\u307e\u4e00\u5b9a\u306e\u901f\u5ea6":18,"\u3053\u306e\u5916\u3067\u306f0\u3068\u306a\u308b\u3088\u3046\u306a\u95a2\u6570":21,"\u3053\u306e\u6642":16,"\u3053\u306e\u6642\u9593\u533a\u9593":21,"\u3053\u308c\u3069\u3093\u306a\u611f\u3058\u306b\u306a\u308b\u3093\u3059\u304b\u306d":2,"\u3053\u3093\u306a\u30b5\u30a4\u30c8\u304c\u51fa\u6765\u305f\u3089\u6700\u9ad8\u3060\u308f":4,"\u3057\u305f\u3082\u306e\u3092\u6307\u3057\u307e\u3059":5,"\u3057\u3063\u304b\u308a\u52c9\u5f37\u3059\u308b\u4eba\u306f":[21,22],"\u305d\u3053\u3067":5,"\u305d\u306e\u5468\u6ce2\u6570\u69cb\u9020\u3092\u5206\u6790\u3059\u308b\u305f\u3081\u306b":21,"\u3060\u3051\u30670\u3067\u306a\u3044\u5024\u3092\u6301\u3061":21,"\u3060\u3051\u30b7\u30d5\u30c8\u3057\u3066\u4e57\u3058\u308b\u3053\u3068\u306b\u3088\u308a":21,"\u3061\u3083\u3093\u3068\u7406\u89e3\u3059\u308b":21,"\u3067\u3042\u308b\u304c":5,"\u3067\u3042\u308b\u97f3\u5727\u30ec\u30d9\u30eb\u3092\u7528\u3044\u3066\u8868\u3059\u3053\u3068\u304c\u591a\u3044":5,"\u3067\u306a\u3044\u5024\u3092\u6301\u3064":21,"\u3067\u306e\u307f":21,"\u3067\u306e\u5909\u4f4d\u3092":18,"\u3067\u306f\u7269\u7406\u7684\u3068\u306f\u306a\u3093\u3067\u3057\u3087\u3046":5,"\u3067\u30d1\u30ef\u30fc":12,"\u3067\u8868\u3055\u308c\u308b":18,"\u3067\u8868\u3057\u305f\u3082\u306e":11,"\u3067\u8868\u3059":[5,21],"\u3067\u8868\u305d\u3046\u304b\u306a":21,"\u3068\u3044\u3046":16,"\u3068\u3044\u3046\u95a2\u6570\u3067\u30b9\u30da\u30af\u30c8\u30e9\u30e0\u3092\u8868\u3059":16,"\u3068\u3057\u305f\u3068\u304d":11,"\u3068\u3057\u3066":21,"\u3068\u3059\u308b":18,"\u3068\u5358\u4f4d\u30b9\u30c6\u30c3\u30d7\u95a2\u6570":23,"\u3068\u547c\u3070\u308c\u308b":21,"\u3068\u79f0\u3057\u3066\u3044\u308b\u306e\u306f":[],"\u3068\u7f6e\u304f\u3068":21,"\u3069\u3046\u3084\u3063\u3066\u3060\u3059\u306d\u3093\u3053\u308c":10,"\u3069\u3046\u3084\u3093\u306e":[4,10],"\u306a\u306b\u3053\u308c":[4,10],"\u306a\u3093\u3084\u306d\u3093\u30b9\u30da\u30af\u30c8\u30ed\u30b0\u30e9\u30e0":10,"\u306a\u3093\u3084\u306d\u3093\u97f3\u97ff\u7279\u5fb4\u91cf":10,"\u306a\u3093\u3084\u306d\u3093mel\u30b9\u30b1\u30fc\u30eb":10,"\u306a\u3093\u3084\u306d\u3093mfcc":10,"\u306b\u304a\u3051\u308b\u30d1\u30ef\u30fc\u306f":5,"\u306b\u4e57\u3058\u308b":21,"\u306b\u5909\u63db\u3057":16,"\u306b\u5bfe\u3057":5,"\u306b\u9069\u5f53\u306a\u5b9f\u6307\u6570\u95a2\u6570":23,"\u306e\u3088\u3046\u306b\u5206\u6790\u7a93\u95a2\u6570":21,"\u306e\u30c7\u30a3\u30b8\u30bf\u30eb\u97f3\u58f0\u4fe1\u53f7":5,"\u306e\u30d1\u30e9\u30e1\u30fc\u30bf":5,"\u306e\u30ec\u30d9\u30eb\u8868\u73fe":11,"\u306e\u96e2\u6563\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u3092":21,"\u306f\u30d5\u30ec\u30fc\u30e0\u30b7\u30d5\u30c8":21,"\u306f\u30d5\u30ec\u30fc\u30e0\u9577":21,"\u306f\u5206\u6790\u7a93\u95a2\u6570\u3068\u547c\u3070\u308c\u308b":21,"\u306f\u6642\u9593\u30d5\u30ec\u30fc\u30e0\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9":21,"\u306f\u8907\u7d20\u95a2\u6570\u3067\u3042\u308b\u304b\u3089\u6b21\u306e\u3088\u3046\u306b\u6975\u5f62\u5f0f\u3067\u8868\u3059\u3053\u3068\u304c\u51fa\u6765\u308b":16,"\u307e\u305c\u308b\u5468\u6ce2\u6570":0,"\u3088\u304f\u4f7f\u308f\u308c\u308b\u97f3\u97ff\u7279\u5fb4\u91cf":[4,10],"\u308f\u304b\u3089\u3093":18,"\u3092\u304b\u3051\u3066\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u3057\u305f\u3082\u306e":23,"\u3092\u304b\u3051\u3066\u96e2\u6563\u6642\u9593\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u3057\u305f\u3082\u306e":23,"\u3092\u307f\u3066\u304f\u3060\u3055\u3044":[21,22],"\u3092\u30d1\u30ef\u30fc\u30b9\u30da\u30af\u30c8\u30e9\u30e0":16,"\u3092\u4f4d\u76f8\u30b9\u30da\u30af\u30c8\u30e9\u30e0":16,"\u3092\u4f55\u3089\u304b\u306e\u624b\u6cd5\u3092\u7528\u3044\u3066":16,"\u3092\u4f7f\u3046\u3053\u3068\u306b\u3059\u308b":21,"\u3092\u632f\u5e45\u30b9\u30da\u30af\u30c8\u30e9\u30e0":16,"\u3092\u6e80\u305f\u3059\u6709\u9650\u9577\u96e2\u6563\u4fe1\u53f7":21,"\u3092\u72ec\u7acb\u5909\u6570\u3068\u3057\u305f\u8907\u7d20\u95a2\u6570":16,"\u3092\u7528\u3044\u3066":5,"\u3092\u77ed\u6642\u9593\u306e\u6642\u9593\u533a\u9593\u306b\u5206\u5272\u3057\u3066":21,"\u3092\u96e2\u6563\u4fe1\u53f7\u3068\u3059\u308b":21,"\u30b1\u30d7\u30b9\u30c8\u30e9\u30e0\u5206\u6790":12,"\u30b1\u30d7\u30b9\u30c8\u30e9\u30e0\u89e3\u6790":[4,10],"\u30b5\u30a4\u30f3\u6ce2\u306e\u6301\u7d9a\u6642\u9593":0,"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u3068\u304d\u306e\u6642\u9593\u9593\u9694\u3092\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u671f\u3084\u6a19\u672c\u5316\u5468\u671f\u3068\u547c\u3076":21,"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570":[0,21],"\u30b5\u30f3\u30d7\u30eb\u6570":5,"\u30b9\u30da\u30af\u30c8\u30e9\u30e0":[4,10],"\u30b9\u30da\u30af\u30c8\u30e9\u30e0\u3068\u306f":[4,10],"\u30b9\u30da\u30af\u30c8\u30eb\u5206\u5e03":5,"\u30cd\u30fc\u30d1":[4,10],"\u30cf\u30df\u30f3\u30b0\u7a93":0,"\u30d0\u30f3\u30c9\u30d1\u30b9\u30d5\u30a3\u30eb\u30bf":[4,10],"\u30d1\u30b9\u30ab\u30eb":5,"\u30d5\u30a3\u30eb\u30bf":[4,10],"\u30d5\u30a3\u30eb\u30bf\u3068\u306f":[4,10],"\u30d5\u30a3\u30eb\u30bf\u306e\u96c6\u5408\u4f53":9,"\u30d5\u30a3\u30eb\u30bf\u30d0\u30f3\u30af":[4,10],"\u30d5\u30fc\u30ea\u30a8\u4fc2\u6570\u306e\u8a08\u7b97":21,"\u30d5\u30fc\u30ea\u30a8\u5909\u63db":[4,22],"\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u306e\u304a\u6c17\u6301\u3061":[4,22],"\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u306f":21,"\u30d5\u30fc\u30ea\u30a8\u7d1a\u6570":21,"\u30d5\u30fc\u30ea\u30a8\u7d1a\u6570\u5c55\u958b":[4,22],"\u30d9\u30eb":[4,10],"\u30e1\u30eb\u5c3a\u5ea6":12,"\u30e1\u30eb\u5c3a\u5ea6\u306b\u5909\u63db":12,"\u30e9\u30d7\u30e9\u30b9\u5909\u63db":[4,22],"\u30e9\u30d7\u30e9\u30b9\u5909\u63db\u3068\u306f":[4,22],"\u30ea\u30d5\u30bf\u30ea\u30f3\u30b0":12,"\u30ec\u30d9\u30eb":5,"\u30ec\u30d9\u30eb\u8868\u73fe":[4,10],"\u30ed\u30fc\u30d1\u30b9\u30ea\u30d5\u30bf\u30ea\u30f3\u30b0":12,"\u4e00\u822c\u306b":[],"\u4e09\u89d2\u95a2\u6570\u306e\u548c\u3067\u8868\u305b\u308b\u3063\u3066\u3044\u3046\u3088\u3046\u306a\u304a\u8003\u3048\u306e\u3082\u306e\u3067\u3059":21,"\u4eba\u9593\u304c\u8a8d\u8b58\u3057\u3046\u308b\u97f3\u306e\u5927\u304d\u3055\u306e\u7bc4\u56f2\u306f\u97f3\u5727\u306e\u5b9f\u5024\u3067\u306f\u5e83\u7bc4\u56f2\u306b\u308f\u305f\u308b":5,"\u4f55\u3092\u57fa\u6e96\u306b\u3057\u3066\u3044\u308b\u304b\u3067\u610f\u5473\u304c\u5909\u308f\u308b":11,"\u4fe1\u53f7\u3092\u6b63\u5f26\u6ce2\u306e\u5408\u6210\u3067\u8868\u3057\u305f\u6642\u306e\u6700\u3082\u4f4e\u3044\u5468\u6ce2\u6570\u6210\u5206\u306e\u5468\u6ce2\u6570\u3092\u6307\u3059":5,"\u4fe1\u53f7\u3092\u8907\u6570\u306e\u6210\u5206\u306b\u5206\u89e3\u3059\u308b\u3082\u306e":21,"\u4fe1\u53f7\u51e6\u7406":4,"\u5168\u6975\u578b\u30d5\u30a3\u30eb\u30bf\u30e2\u30c7\u30eb":5,"\u5207\u308a\u51fa\u3057\u305f\u6642\u9593\u533a\u9593\u306e\u5148\u982d\u306b\u6642\u9593\u539f\u70b9\u3092\u79fb\u52d5\u3057\u305f\u6709\u9650\u9577\u4fe1\u53f7\u3092\u5b9a\u7fa9\u3059\u308b":21,"\u524d\u63d0\u77e5\u8b58":[4,10],"\u53c2\u8003":0,"\u53cd\u8ee2\u30d1\u30c7\u30a3\u30f3\u30b0\u306a\u308b\u3082\u306e\u304c\u3042\u308b":0,"\u53ef\u8074\u57df\u306b\u3042\u308b\u97f3\u306f\u540c\u3058\u5468\u6ce2\u6570\u3067\u3042\u308c\u3070":5,"\u53ef\u8074\u632f\u52d5\u6570":[],"\u5404\u6ce2\u306e\u6700\u5927\u632f\u5e45\u3092\u8a2d\u5b9a":0,"\u5468\u671f\u4fe1\u53f7\u3092\u5206\u89e3\u3059\u308b\u3067\u30fc":21,"\u5468\u671f\u7684\u306a\u6ce2\u306f\u4e00\u822c\u306b":18,"\u5468\u6ce2\u6570\u306e\u5e2f\u57df\u5206\u96e2\u3092\u3059\u308b\u3084\u3064":9,"\u5468\u6ce2\u6570\u3092":21,"\u56fa\u4f53\u3092\u554f\u308f\u305a":6,"\u57fa\u672c\u5468\u6ce2\u6570":5,"\u57fa\u6e96\u3068\u306a\u308b\u91cf\u3068\u306e\u6bd4\u306e\u5bfe\u6570\u3067\u8868\u3059\u6307\u6a19":11,"\u57fa\u6e96\u5024":5,"\u57fa\u6e96\u91cf\u3092":11,"\u5834\u6240":18,"\u591a\u5206\u4fe1\u53f7\u306e\u5b9f\u52b9\u5024":5,"\u5b9f\u7528\u4e0a\u306fstft\u306e\u30d5\u30ec\u30fc\u30e0\u4e00\u3064\u4e00\u3064\u306e\u30d1\u30ef\u30fc\u3092\u6c42\u3081\u308b\u306e\u304c\u3088\u3055\u305d\u3046":5,"\u5b9f\u88c5":4,"\u5b9f\u969b\u306b\u305d\u3046\u8a08\u7b97\u3059\u308b\u3053\u3068\u304c\u591a\u3044":21,"\u5bfe\u6570\u3092\u53d6\u308b":12,"\u5e83\u7fa9\u3067\u306f":6,"\u5f3e\u6027\u4f53\u3092\u4f1d\u64ad\u3059\u308b\u3042\u3089\u3086\u308b\u5f3e\u6027\u6ce2\u306e\u7dcf\u79f0\u3092\u3055\u3059":6,"\u5f3e\u6027\u4f53\u4e2d\u3092\u305d\u306e\u5f3e\u6027\u306b\u57fa\u3065\u3044\u3066\u4f1d\u308f\u308b\u632f\u52d5\u73fe\u8c61\u3092\u97f3\u6ce2\u3068\u3044\u3046":[],"\u632f\u52d5\u4f53\u304b\u3089\u306e\u632f\u52d5\u304c\u7e26\u6ce2\u3068\u3057\u3066\u7a7a\u6c17\u4e2d\u3092\u4f1d\u308f\u308a\u8033\u306b\u9054\u3059\u308b\u3082\u306e\u3067":[],"\u632f\u5e45\u30b9\u30da\u30af\u30c8\u30e9\u30e0\u7b97\u51fa":12,"\u6587\u5b57\u901a\u308a":5,"\u65b9\u5411\u3068\u3057":18,"\u65b9\u5411\u306b\u4f1d\u642c\u3057\u3066\u3044\u304f\u3068\u3059\u308b":18,"\u6642\u9593":18,"\u6642\u9593\u30d1\u30bf\u30fc\u30f3":5,"\u6642\u9593\u30d5\u30ec\u30fc\u30e0\u3042\u308b\u3044\u306f\u5358\u306b\u30d5\u30ec\u30fc\u30e0\u3068\u547c\u3070\u308c":21,"\u6642\u9593\u4fe1\u53f7":23,"\u6642\u9593\u8ef8\u4e0a\u306e\u5468\u671f\u6ce2\u5f62\u3092\u540c\u3058\u5468\u671f\u3067\u3042\u308b\u57fa\u672c\u6ce2\u3068\u9ad8\u8abf\u6ce2\u3067\u8868\u3059\u3053\u3068\u3092":21,"\u666e\u901a":[],"\u66f8\u304d\u305f\u3044\u3082\u306e\u307e\u3068\u3081":4,"\u66f8\u304d\u65b9\u3092\u8003\u3048\u76f4\u3059":21,"\u6700\u5927\u632f\u5e45":0,"\u6b63\u898f\u5316\u6642\u9593\u306f\u7121\u6b21\u5143\u91cf\u3067\u3042\u308b\u304c":21,"\u6b63\u898f\u5316\u89d2\u5468\u6ce2\u6570":21,"\u6c17\u4f53":6,"\u6c17\u5408\u304c\u6b8b\u3063\u3066\u305f\u3089\u66f8\u304f":21,"\u6ce2\u306e\u9032\u884c\u65b9\u5411\u3092":18,"\u6ce2\u52d5\u3068\u306f":[4,10],"\u6ce2\u52d5\u306f":18,"\u6ce2\u52d5\u65b9\u7a0b\u5f0f":[4,10],"\u6ce2\u52d5\u65b9\u7a0b\u5f0f\u3068\u306f":[4,10],"\u6ce2\u5f62\u3092\u30d5\u30fc\u30ea\u30a8\u7d1a\u6570\u5c55\u958b\u3059\u308b\u3068\u3044\u3046":21,"\u6ce2\u5f62\u5168\u4f53\u3084\u4e00\u90e8\u5206\u3067\u8a08\u7b97\u3055\u308c\u308b":5,"\u6ce2\u5f62\u632f\u5e45\u306e\u6642\u9593\u5e73\u5747\u5024":5,"\u6ce2\u6570":18,"\u6ce2\u9577":18,"\u6db2\u4f53":6,"\u6fc0\u30ad\u30e2\u95a2\u6570\u3092\u9664\u3044\u3066":21,"\u7269\u7406\u91cf":11,"\u7269\u7406\u91cf\u3068\u3057\u3066":5,"\u7279\u5b9a\u306e\u5468\u6ce2\u6570\u5e2f\u57df\u306e\u7269\u7406\u73fe\u8c61\u3092\u62bd\u51fa\u3059\u308b\u30d5\u30a3\u30eb\u30bf\u306e\u4e00\u7a2e":9,"\u72ed\u7fa9\u306b\u306f\u4eba\u9593\u3084\u52d5\u7269\u306e\u53ef\u8074\u5468\u6ce2\u6570\u3067\u3042\u308b\u7a7a\u4e2d\u3092\u4f1d\u64ad\u3059\u308b\u5f3e\u6027\u6ce2\u3092\u3055\u3059":6,"\u72ed\u7fa9\u306e\u97f3\u6ce2\u3092\u30d2\u30c8\u306a\u3069\u306e\u751f\u7269\u304c\u8074\u899a\u5668\u5b98\u306b\u3088\u3063\u3066\u6349\u3048\u308b\u3068\u97f3\u3068\u3057\u3066\u8a8d\u8b58\u3059\u308b":6,"\u7406\u89e3\u306e\u305f\u3081\u306b\u5358\u4f4d\u3068\u3057\u3066":21,"\u7528\u306f\u97f3\u306e\u7269\u7406\u7684\u306a\u7279\u5fb4\u3084\u7279\u6027\u3092\u307e\u3068\u3081\u305f\u3082\u306e\u3067\u3059":5,"\u7573\u307f\u8fbc\u307f":[4,10],"\u7573\u307f\u8fbc\u307f\u548c":8,"\u7573\u307f\u8fbc\u307f\u7a4d":8,"\u77ed\u3044\u6642\u9593\u9593\u9694\u3067ft\u3057\u3066\u6642\u9593\u69cb\u9020\u3092\u898b\u3061\u3083\u3046\u3067\u30fc":21,"\u77ed\u6642\u9593\u30d5\u30fc\u30ea\u30a8\u5909\u63db":[4,22],"\u77ed\u6642\u9593\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u3067\u306f":21,"\u7a7a\u9593\u3068\u6642\u9593\u306b\u6307\u5b9a\u3055\u308c\u308b\u95a2\u6570\u306b\u3088\u3063\u3066\u8868\u3055\u308c\u308b":18,"\u7a93\u95a2\u6570\u306e\u9069\u5fdc":0,"\u7a93\u95a2\u6570\u3092\u304b\u3051\u308b\u6642\u306b\u7aef\u70b9\u304c\u554f\u984c\u306b\u306a\u308b\u305f\u3081":0,"\u7a93\u95a2\u6570\u3092\u9069\u7528\u3059\u308b\u56de\u6570":0,"\u7d50\u679c\u3092\u683c\u7d0d\u3059\u308b\u7bb1":0,"\u8074\u899a\u5c3a\u5ea6":[4,10],"\u81ea\u5df1\u56de\u5e30\u30e2\u30c7\u30eb\u7b49":5,"\u822c\u306b":[],"\u82f1":[],"\u8907\u7d20\u89d2\u5468\u6ce2\u6570":16,"\u89e3\u6790\u306b\u304a\u3044\u3066\u306f":16,"\u89e3\u6790\u5bfe\u8c61\u3068\u306a\u308b\u6642\u9593\u9818\u57df\u4fe1\u53f7\u306e\u7a2e\u985e\u306b\u5fdc\u3058\u305f\u624b\u6cd5\u306b\u3088\u3063\u3066\u6c42\u3081\u3089\u308c\u308b\u5468\u6ce2\u6570\u9818\u57df\u4fe1\u53f7\u306e\u3053\u3068\u3092\u30b9\u30da\u30af\u30c8\u30e9\u30e0\u3068\u547c\u3076":16,"\u8ad6\u6587\u307e\u3068\u3081":4,"\u90e8\u5206\u3092\u5207\u308a\u51fa\u3057":21,"\u9577\u3055n":5,"\u96e2\u6563\u30b3\u30b5\u30a4\u30f3\u5909\u63db":12,"\u96e2\u6563\u30d5\u30fc\u30ea\u30a8\u5909\u63db":[4,22],"\u96e2\u6563\u4fe1\u53f7\u3067\u306f\u6642\u9593\u3092\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u671f\u3067\u5272\u3063\u3066\u6b63\u898f\u5316\u3057\u305f\u3082\u306e\u3092\u6642\u9593\u3068\u3057\u3066\u8003\u3048\u3066\u3044\u308b":21,"\u96e2\u6563\u4fe1\u53f7\u306e\u5834\u5408":16,"\u96e2\u6563\u5024\u3067\u3082ft\u3057\u3061\u3083\u3046\u3067\u30fc":21,"\u96e2\u6563\u6642\u9593\u30d5\u30fc\u30ea\u30a8\u5909\u63db":[4,22],"\u96e2\u6563\u6642\u9593\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u3067\u306e\u8868\u3057\u65b9\u3092\u8003\u3048\u3066":21,"\u96e2\u6563\u6642\u9593\u4fe1\u53f7":23,"\u975e\u5468\u671f\u4fe1\u53f7\u3082\u5206\u89e3\u3057\u3061\u3083\u3046\u3067\u30fc":21,"\u975e\u6b63\u898f\u5316\u89d2\u5468\u6ce2\u6570":21,"\u97f3":[],"\u97f3\u306b\u542b\u307e\u308c\u308b\u7269\u7406\u7684\u306a\u7279\u5fb4\u3092\u6570\u5024\u5316":5,"\u97f3\u306e\u305f\u304b\u3055":5,"\u97f3\u306e\u4e09\u8981\u7d20":5,"\u97f3\u306e\u5468\u671f":5,"\u97f3\u306e\u5727\u529b":5,"\u97f3\u306e\u5927\u304d\u3055":5,"\u97f3\u5727\u304c\u5927\u304d\u3044\u307b\u3069\u5927\u304d\u306a\u97f3\u3068\u3057\u3066\u8a8d\u8b58\u3055\u308c\u308b":5,"\u97f3\u5727\u306e\u5358\u4f4d\u306f\u5727\u529b\u3092\u793a\u3059\u5358\u4f4d\u3067\u3042\u308bpa":5,"\u97f3\u5727\u306e\u5927\u304d\u3055\u3092\u57fa\u6e96\u3068\u306a\u308b\u5024\u3068\u306e\u6bd4\u306e\u5e38\u7528\u5bfe\u6570\u306b\u3088\u3063\u3066\u8868\u73fe\u3055\u308c\u308b\u91cf":5,"\u97f3\u58f0\u306e\u53ef\u8996\u5316":[4,10],"\u97f3\u58f0\u306e\u6e96\u5099":[1,4],"\u97f3\u58f0\u306e\u78ba\u8a8d":[1,4],"\u97f3\u58f0\u4fe1\u53f7\u306b\u304a\u3044\u3066\u306f\u6642\u9593\u4fe1\u53f7\u3092\u8907\u6570\u306e\u5468\u6ce2\u6570\u6210\u5206\u306b\u5206\u89e3\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3068\u899a\u3048\u3066\u304a\u304f\u3068\u3088\u3044":21,"\u97f3\u58f0\u4fe1\u53f7\u51e6\u7406\u306b\u5411\u3051\u305f\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u306e\u5b66\u3073":[4,22],"\u97f3\u58f0\u9577\u3092":21,"\u97f3\u6ce2":[4,10],"\u97f3\u6ce2\u3068\u306f":[4,10],"\u97f3\u8272":5,"\u97f3\u91cf\u3068\u3082\u547c\u3070\u308c\u3066\u305f\u308a\u3059\u308b":5,"\u97f3\u97ff\u5de5\u5b66\u306e\u5206\u91ce\u3067\u306f\u4eba\u9593\u306e\u8074\u899a\u7279\u6027\u306b\u5408\u308f\u305b":5,"\u97f3\u97ff\u7279\u5fb4\u91cf":[4,10],"\u97f3\u97ff\u7279\u5fb4\u91cf\u3063\u3066\u306a\u3093\u3067\u3059\u304b":5,"\u97f3\u97ff\u7279\u5fb4\u91cf\u3068\u306f":[4,10],"\u97f3\u97ff\u7279\u5fb4\u91cf\u96c6":[4,10],"\u9ad8\u901f\u30d5\u30fc\u30ea\u30a8\u5909\u63db":[4,22],"cepstrum\u89e3\u6790\u5b9f\u88c5":[1,4],"char":18,"db\u3068\u66f8\u304b\u308c\u3066\u3044\u308b\u3082\u306e\u3067\u3082":11,"db\u306b\u3059\u308b":12,"dct\u306f\u4fe1\u53f7\u3092y\u8ef8\u3067\u6298\u308a\u8fd4\u3057\u3066\u5076\u95a2\u6570\u5316\u3057\u3066dft\u3059\u308b\u3053\u3068\u3068\u7b49\u4fa1\u3067\u3042\u308a":21,"float":0,"import":[0,3],"int":[0,8,21,23],"int\u306f\u5207\u308a\u6368\u3066":0,"k\u3067\u96e2\u6563\u5468\u6ce2\u6570\u3092\u8868\u3057\u3066\u308b\u306e\u3067":21,"lpc\u3068\u304b\u30b1\u30d7\u30b9\u30c8\u30e9\u30e0\u3068\u304b\u3092\u5305\u542b\u3059\u308b\u3084\u3064":13,"mel\u5c3a\u5ea6":[4,10],"mks\u5358\u4f4d\u7cfb\u3067\u8868\u73fe\u53ef\u80fd":5,"nbsphinx\u4f7f\u3044\u3084\u3059\u3044\u3088\u3063\u3066\u8a71":[4,10],"padding\u3092\u884c\u3046":0,"pandoc\u3044\u308c\u3066\u306a\u304f\u3066\u30a8\u30e9\u30fc\u51fa\u305f":14,"pandoc\u3067\u89e3\u6c7a":14,"pytorchaudio\u3092\u8a66\u3059":[1,4],"return":0,"z\u5909\u63db\u3068\u306f":[4,22],A:[0,11,18],_:[5,21,23],_pdf:[18,21],a0:7,a2:[6,21],a3:[9,21],a4:21,a7:5,a9:7,a_0:11,a_7_1124:13,a_i:5,ab:[0,5,9,19],abcpedia:5,ac:[5,13,18,21,22],acoust:[],activ:16,ae:18,amp:0,amplitud:0,an:[4,20],angl:16,aovvaw2s1:15,append:0,apt:14,aqfnoecauqaq:15,arang:0,articl:[18,21],arxiv:19,audio:[0,3],auto:0,axi:0,b1:7,b3:[5,6,9,21],b5:21,b9:[7,9],b:[0,11],bf:9,browser:[0,3],c1:5,c:23,cad:15,cd:15,cdot:16,challeng:[4,20],chem:18,cmath:0,cn:23,co:[0,5,7,18],cognicul:4,com:[0,4,14,15],concaten:0,conv1d:8,conv2d:8,convers:[4,20],ct:23,d:[8,21],data:0,db:5,dct:12,deep:[4,20],def:0,delta:18,dft:[1,4],displai:[0,3],doe:[0,3],dt:[21,23],e3:[5,7,9,21],e5:[5,21],e6:[6,21],e9:[5,6,21],e:[0,16,21,23],ec032ad80fe9a994f0ea:14,ed:16,element:[0,3],emm101:5,emm185:7,emm_back:[5,7],en:14,engin_01:5,esrc:15,example_audio_fil:3,extract:[4,10],f:[0,8,18,21],f_:21,figur:3,fiw:15,frac:[5,11,21],freq_list:0,from:[0,3,4,20],fs:0,ft:12,g:8,geq:23,get:14,github:16,go:[18,21],googl:15,gt:3,hamm:0,help:0,hop:0,hop_length:21,hp:[5,7],html:[0,15,16,21,22],http:[0,4,5,6,7,9,13,14,15,16,18,19,21,22],hz:21,i:[0,5,8],ic:[21,22],infti:[21,23],io:[14,16],ipython:[0,3],item:14,its:[4,20],j:[8,15,16,18,21,23],ja:[4,5,6,7,9,18,21],jasj:[18,21],jp:[0,5,7,13,18,21,22],jst:[18,21],jstage:[18,21],k:[0,8,18,21],kn:21,konan:18,kotobank:[],kozo2:14,kx:18,l_a:11,l_p:5,l_w:5,lambda:18,lamda:[],learn:[4,20],lectur:[21,22],lecture_fil:5,len:0,leq:21,lfloor:21,line2d:3,line:3,linspac:0,list:0,ln:11,load:3,log_:[5,11],lt:3,m:[0,8,21],main:[21,22],make_sin_wav:0,math:[],mathbb:23,mathwork:0,matplotlib:[0,3],max_amp:0,memo:0,mfcc:[4,10],mgc:[4,10],model:[4,20],ms:21,n:[0,5,8,21,23],nbsphinx:14,net:15,nitech:13,note:5,np:[0,11],numpi:[0,3],ocw:5,omega:[16,18,21,23],omega_0:21,omega_0kt:21,onosokki:[5,7],open:16,org:[5,6,7,9,19,21],overview:[4,20],p:5,p_0:5,pa:5,pad_first:0,pad_last:0,page02:16,paper:13,pcolormesh:0,pcsi:18,pdf:[5,7,13,18],pi:[0,21],plot:[0,3],plot_spec:0,plt:[0,3],pressur:5,pyplot:[0,3],python:0,python_dataset:3,q:15,qc:15,qiita:14,rad:21,ramda:[],rang:0,rate:0,rct:15,readthedoc:14,ref:0,reshap:0,rfloor:21,rja:15,round:0,s:[0,15,21,23],sa:15,sampl:21,sample_r:3,sec:0,selected_pub:13,shade:0,shape:0,show:0,signal:0,sin:[0,18],size:0,sourc:15,sp:13,spec:0,specgram:0,spectrum:[4,10,16],sqrt:5,st:23,statist:[4,20],stft:[1,4,12],str:0,sudo:14,sum:[0,5,21,23],sum_:8,support:[0,3],swk:[21,22],t:[0,3,5,8,15,18,21,23],t_0:[18,21],t_:21,tau:8,test2:[1,4],test:[1,4],text01:16,tf_:21,time:[0,5,11],tip:0,tmytokai:16,tohoku:[21,22],tokuda:13,tokuda_j75:13,tokyo:5,torch:3,torchaudio:3,type:0,u:[5,18],u_0:23,uact:15,url:15,usg:15,util:3,v:[18,21],varepsilon_t:5,ved:15,voic:[4,20],w:5,w_0:5,w_a:21,wave:[],wave_pw:18,waveform:[1,4,10],web:15,web_materi:18,wiki:[5,6,7,9,21],wikipedia:[5,6,7,9,21],win_length:[0,21],window:0,windowed_x:0,wk:[5,7],word:[],www:[5,7,13,15,18,21,22],x:[0,5,16,18,21,23],x_:5,x_k:21,x_ke:21,x_m:21,x_pad:0,xlabel:0,y_:5,y_t:5,yaruodsp:[21,22],ylabel:0,your:[0,3],z:[16,23]},titles:["cepstrum\u89e3\u6790\u5b9f\u88c5","\u5b9f\u88c5","test","pytorchaudio\u3092\u8a66\u3059","\u97f3\u58f0\u4fe1\u53f7\u51e6\u7406\u306e\u5099\u5fd8\u9332","\u97f3\u97ff\u7279\u5fb4\u91cf","\u97f3\u6ce2","\u30b1\u30d7\u30b9\u30c8\u30e9\u30e0\u89e3\u6790","\u7573\u307f\u8fbc\u307f","\u30d5\u30a3\u30eb\u30bf","\u66f8\u304d\u305f\u3044\u3082\u306e\u307e\u3068\u3081","\u30ec\u30d9\u30eb\u8868\u73fe","extract mfcc","mgcs","nbsphinx\u4f7f\u3044\u3084\u3059\u3044\u3088\u3063\u3066\u8a71","\u8074\u899a\u5c3a\u5ea6","\u30b9\u30da\u30af\u30c8\u30e9\u30e0","\u97f3\u58f0\u306e\u53ef\u8996\u5316","\u6ce2\u52d5\u65b9\u7a0b\u5f0f","An Overview of Voice Conversion and its Challenges: From Statistical Modeling to Deep Learning","\u8ad6\u6587\u307e\u3068\u3081","\u97f3\u58f0\u4fe1\u53f7\u51e6\u7406\u306b\u5411\u3051\u305f\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u306e\u5b66\u3073","\u4fe1\u53f7\u51e6\u7406","\u30e9\u30d7\u30e9\u30b9\u5909\u63db"],titleterms:{"\u3069\u3046\u3084\u3093\u306e":12,"\u306a\u306b\u3053\u308c":13,"\u3088\u304f\u4f7f\u308f\u308c\u308b\u97f3\u97ff\u7279\u5fb4\u91cf":5,"\u30b1\u30d7\u30b9\u30c8\u30e9\u30e0\u89e3\u6790":7,"\u30b9\u30da\u30af\u30c8\u30e9\u30e0":16,"\u30b9\u30da\u30af\u30c8\u30e9\u30e0\u3068\u306f":16,"\u30cd\u30fc\u30d1":11,"\u30d0\u30f3\u30c9\u30d1\u30b9\u30d5\u30a3\u30eb\u30bf":9,"\u30d1\u30ef\u30fc\u30b9\u30da\u30af\u30c8\u30e9\u30e0":0,"\u30d1\u30ef\u30fc\u30b9\u30da\u30af\u30c8\u30eb":5,"\u30d5\u30a3\u30eb\u30bf":9,"\u30d5\u30a3\u30eb\u30bf\u3068\u306f":9,"\u30d5\u30a3\u30eb\u30bf\u30d0\u30f3\u30af":9,"\u30d5\u30a9\u30eb\u30de\u30f3\u30c8\u5468\u6ce2\u6570":5,"\u30d5\u30fc\u30ea\u30a8\u5909\u63db":21,"\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u306e\u304a\u6c17\u6301\u3061":21,"\u30d5\u30fc\u30ea\u30a8\u7d1a\u6570\u5c55\u958b":21,"\u30d9\u30eb":11,"\u30e9\u30d7\u30e9\u30b9\u5909\u63db":23,"\u30e9\u30d7\u30e9\u30b9\u5909\u63db\u3068\u306f":23,"\u30ec\u30d9\u30eb\u8868\u73fe":11,"\u4fe1\u53f7\u51e6\u7406":22,"\u524d\u63d0\u77e5\u8b58":12,"\u5468\u6ce2\u6570\u5206\u89e3\u80fd":21,"\u5b9f\u88c5":1,"\u6642\u9593\u5206\u89e3\u80fd":21,"\u66f8\u304d\u305f\u3044\u3082\u306e\u307e\u3068\u3081":10,"\u6ce2\u52d5\u3068\u306f":18,"\u6ce2\u52d5\u65b9\u7a0b\u5f0f":18,"\u6ce2\u52d5\u65b9\u7a0b\u5f0f\u3068\u306f":18,"\u7573\u307f\u8fbc\u307f":8,"\u76ee\u6b21":[5,6,7,9,11,12,13,15,16,17,18,19,21,23],"\u77ed\u6642\u9593\u30d5\u30fc\u30ea\u30a8\u5909\u63db":21,"\u8074\u899a\u5c3a\u5ea6":15,"\u8ad6\u6587\u307e\u3068\u3081":20,"\u96e2\u6563\u30b3\u30b5\u30a4\u30f3\u5909\u63db":21,"\u96e2\u6563\u30d5\u30fc\u30ea\u30a8\u5909\u63db":21,"\u96e2\u6563\u6642\u9593\u30d5\u30fc\u30ea\u30a8\u5909\u63db":21,"\u97f3\u5727":5,"\u97f3\u5727\u30ec\u30d9\u30eb":5,"\u97f3\u58f0\u306e\u53ef\u8996\u5316":17,"\u97f3\u58f0\u306e\u6e96\u5099":0,"\u97f3\u58f0\u306e\u78ba\u8a8d":3,"\u97f3\u58f0\u4fe1\u53f7\u51e6\u7406\u306b\u5411\u3051\u305f\u30d5\u30fc\u30ea\u30a8\u5909\u63db\u306e\u5b66\u3073":21,"\u97f3\u58f0\u4fe1\u53f7\u51e6\u7406\u306e\u5099\u5fd8\u9332":4,"\u97f3\u6ce2":6,"\u97f3\u6ce2\u3068\u306f":6,"\u97f3\u97ff\u30d1\u30ef\u30fc":5,"\u97f3\u97ff\u30d1\u30ef\u30fc\u30ec\u30d9\u30eb":5,"\u97f3\u97ff\u7279\u5fb4\u91cf":5,"\u97f3\u97ff\u7279\u5fb4\u91cf\u3068\u306f":5,"\u97f3\u97ff\u7279\u5fb4\u91cf\u96c6":5,"\u9ad8\u901f\u30d5\u30fc\u30ea\u30a8\u5909\u63db":21,"cepstrum\u89e3\u6790\u5b9f\u88c5":0,"mel\u5c3a\u5ea6":15,"nbsphinx\u4f7f\u3044\u3084\u3059\u3044\u3088\u3063\u3066\u8a71":14,"pytorchaudio\u3092\u8a66\u3059":3,"z\u5909\u63db\u3068\u306f":23,an:19,cepstrum:17,challeng:19,content:[1,4,10,20,22],convers:19,deep:19,dft:0,extract:12,f0:5,from:19,its:19,learn:19,loud:5,lpc:5,mfcc:[5,12],mgc:13,model:19,overview:19,peak:5,rm:5,spectrum:17,statist:19,stft:0,test2:2,test:2,voic:19,waveform:[3,17]}})