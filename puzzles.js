(function () {
  "use strict";
  // prettier-ignore
  const SOURCE={"models":{"delete":{"meshes":[{"name":"delete_イ","vertices":[[-0.45,0.55,-3.0],[0.45,0.55,-3.0],[-0.45,1.45,-3.0],[0.45,1.45,-3.0]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-0.png"},{"name":"delete_ウ","vertices":[[-3.0,0.55,0.4493304],[-3.0,0.55,-0.4493304],[-3.0,1.45,0.4493304],[-3.0,1.45,-0.4493304]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-1.png"},{"name":"delete_オ","vertices":[[2.5677245,0.55,1.9322754],[1.9322755,0.55,2.5677246],[2.5677245,1.45,1.9322754],[1.9322755,1.45,2.5677246]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-2.png"},{"name":"delete_カ","vertices":[[0.4493304,0.55,2.9999999],[-0.4493304,0.55,3.0000001],[0.4493304,1.45,2.9999999],[-0.4493304,1.45,3.0000001]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-3.png"},{"name":"delete_グ","vertices":[[1.6756925,2.3500002,2.5287452],[0.8600157,2.3500002,2.909102],[1.6756925,3.2500002,2.5287452],[0.8600157,3.2500002,2.909102]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-4.png"},{"name":"delete_ス","vertices":[[2.9727577,2.3500002,0.6038283],[2.6653977,2.3500002,1.4482933],[2.9727577,3.2500002,0.6038283],[2.6653977,3.2500002,1.4482933]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-5.png"},{"name":"delete_ズ","vertices":[[2.5287453,2.3500002,-1.6756932],[2.9091019,2.3500002,-0.8600161],[2.5287453,3.2500002,-1.6756932],[2.9091019,3.2500002,-0.8600161]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-6.png"},{"name":"delete_タ","vertices":[[-2.5677246,0.55,-1.9322755],[-1.9322754,0.55,-2.5677245],[-2.5677246,1.45,-1.9322755],[-1.9322754,1.45,-2.5677245]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-7.png"},{"name":"delete_ノ","vertices":[[-1.6750863,2.3500002,-2.5290284],[-0.860623,2.3500002,-2.9088188],[-1.6750863,3.2500002,-2.5290284],[-0.860623,3.2500002,-2.9088188]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-8.png"},{"name":"delete_ハ","vertices":[[-1.9327477,0.55,2.5672525],[-2.5672523,0.55,1.9327475],[-1.9327477,1.45,2.5672525],[-2.5672523,1.45,1.9327475]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-9.png"},{"name":"delete_ベ","vertices":[[3.0,0.55,-0.4486627],[3.0,0.55,0.4486627],[3.0,1.45,-0.4486627],[3.0,1.45,0.4486627]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-10.png"},{"name":"delete_リ","vertices":[[1.9322754,0.55,-2.5677245],[2.5677246,0.55,-1.9322755],[1.9322754,1.45,-2.5677245],[2.5677246,1.45,-1.9322755]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-11.png"},{"name":"delete_ル","vertices":[[0.6038279,2.3500002,-2.972758],[1.4482928,2.3500002,-2.6653979],[0.6038279,3.2500002,-2.972758],[1.4482928,3.2500002,-2.6653979]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-12.png"},{"name":"delete_ロ","vertices":[[-2.972987,2.3500002,-0.6031986],[-2.6651689,2.3500002,-1.448922],[-2.972987,3.2500002,-0.6031986],[-2.6651689,3.2500002,-1.448922]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-13.png"},{"name":"delete_ン","vertices":[[-2.665169,2.3500002,1.4489216],[-2.972987,2.3500002,0.6031982],[-2.665169,3.2500002,1.4489216],[-2.972987,3.2500002,0.6031982]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-14.png"},{"name":"delete_オ_on","vertices":[[2.5677245,0.55,1.9322754],[1.9322755,0.55,2.5677246],[2.5677245,1.45,1.9322754],[1.9322755,1.45,2.5677246]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-15.png"},{"name":"delete_イ_on","vertices":[[-0.45,0.55,-3.0],[0.45,0.55,-3.0],[-0.45,1.45,-3.0],[0.45,1.45,-3.0]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-16.png"},{"name":"delete_ウ_on","vertices":[[-3.0,0.55,0.4493304],[-3.0,0.55,-0.4493304],[-3.0,1.45,0.4493304],[-3.0,1.45,-0.4493304]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-17.png"},{"name":"delete_カ_on","vertices":[[0.4493304,0.55,2.9999999],[-0.4493304,0.55,3.0000001],[0.4493304,1.45,2.9999999],[-0.4493304,1.45,3.0000001]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-18.png"},{"name":"delete_グ_on","vertices":[[1.6756925,2.3500002,2.5287452],[0.8600157,2.3500002,2.909102],[1.6756925,3.2500002,2.5287452],[0.8600157,3.2500002,2.909102]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-19.png"},{"name":"delete_ス_on","vertices":[[2.9727577,2.3500002,0.6038283],[2.6653977,2.3500002,1.4482933],[2.9727577,3.2500002,0.6038283],[2.6653977,3.2500002,1.4482933]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-20.png"},{"name":"delete_ズ_on","vertices":[[2.5287453,2.3500002,-1.6756932],[2.9091019,2.3500002,-0.8600161],[2.5287453,3.2500002,-1.6756932],[2.9091019,3.2500002,-0.8600161]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-21.png"},{"name":"delete_タ_on","vertices":[[-2.5677246,0.55,-1.9322755],[-1.9322754,0.55,-2.5677245],[-2.5677246,1.45,-1.9322755],[-1.9322754,1.45,-2.5677245]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-22.png"},{"name":"delete_ノ_on","vertices":[[-1.6750863,2.3500002,-2.5290284],[-0.860623,2.3500002,-2.9088188],[-1.6750863,3.2500002,-2.5290284],[-0.860623,3.2500002,-2.9088188]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-23.png"},{"name":"delete_ハ_on","vertices":[[-1.9327477,0.55,2.5672525],[-2.5672523,0.55,1.9327475],[-1.9327477,1.45,2.5672525],[-2.5672523,1.45,1.9327475]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-24.png"},{"name":"delete_ベ_on","vertices":[[3.0,0.55,-0.4486627],[3.0,0.55,0.4486627],[3.0,1.45,-0.4486627],[3.0,1.45,0.4486627]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-25.png"},{"name":"delete_リ_on","vertices":[[1.9322754,0.55,-2.5677245],[2.5677246,0.55,-1.9322755],[1.9322754,1.45,-2.5677245],[2.5677246,1.45,-1.9322755]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-26.png"},{"name":"delete_ル_on","vertices":[[0.6038279,2.3500002,-2.972758],[1.4482928,2.3500002,-2.6653979],[0.6038279,3.2500002,-2.972758],[1.4482928,3.2500002,-2.6653979]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-27.png"},{"name":"delete_ロ_on","vertices":[[-2.972987,2.3500002,-0.6031986],[-2.6651689,2.3500002,-1.448922],[-2.972987,3.2500002,-0.6031986],[-2.6651689,3.2500002,-1.448922]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-28.png"},{"name":"delete_ン_on","vertices":[[-2.665169,2.3500002,1.4489216],[-2.972987,2.3500002,0.6031982],[-2.665169,3.2500002,1.4489216],[-2.972987,3.2500002,0.6031982]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"delete-29.png"}],"sha256":"40482685491a3d7e05a6f0583988b51c8a300f398ee3eec1ae4fc604e7068b2a"},"bushu":{"meshes":[{"name":"bushu_1","vertices":[[0.2585854,6.7765722,-1.9999998],[1.2585854,6.7765722,-1.9999998],[0.2585854,7.7765722,-1.9999998],[1.2585854,7.7765722,-1.9999998]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-0.png"},{"name":"bushu_1_on","vertices":[[0.2585854,6.7765722,-1.9999996],[1.2585854,6.7765722,-2.0],[0.2585854,7.7765722,-1.9999996],[1.2585854,7.7765722,-2.0]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-1.png"},{"name":"bushu_2","vertices":[[0.1614746,4.9722147,-1.9999995],[1.1614746,4.9722147,-1.9999995],[0.1614746,5.9722147,-1.9999995],[1.1614746,5.9722147,-1.9999995]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-2.png"},{"name":"bushu_2_on","vertices":[[0.1614746,4.9722147,-1.9999995],[1.1614746,4.9722147,-1.9999995],[0.1614746,5.9722147,-1.9999995],[1.1614746,5.9722147,-1.9999995]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-3.png"},{"name":"bushu_3","vertices":[[3.1426351,6.8812737,-2.2499992],[4.0086606,6.8812737,-1.7499996],[3.1426351,7.8812737,-2.2499992],[4.0086606,7.8812737,-1.7499996]],"uv":[[0.06938377022743225,0.9306162595748901],[0.9306162595748901,0.9306162595748901],[0.06938377022743225,0.06938374042510986],[0.9306162595748901,0.06938374042510986]],"indices":[0,1,3,0,3,2],"image":"bushu-4.png"},{"name":"bushu_3_on","vertices":[[3.1426352,6.8812737,-2.2499992],[4.0086605,6.8812737,-1.7499996],[3.1426352,7.8812737,-2.2499992],[4.0086605,7.8812737,-1.7499996]],"uv":[[0.06938377022743225,0.9306162595748901],[0.9306162595748901,0.9306162595748901],[0.06938377022743225,0.06938374042510986],[0.9306162595748901,0.06938374042510986]],"indices":[0,1,3,0,3,2],"image":"bushu-5.png"},{"name":"bushu_4","vertices":[[1.6626537,5.5611749,-1.9999993],[2.6626536,5.5611749,-1.9999995],[1.6626537,6.5611749,-1.9999993],[2.6626536,6.5611749,-1.9999995]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-6.png"},{"name":"bushu_4_on","vertices":[[1.6626537,5.5611749,-1.9999993],[2.6626536,5.5611749,-1.9999995],[1.6626537,6.5611749,-1.9999993],[2.6626536,6.5611749,-1.9999995]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-7.png"},{"name":"bushu_5","vertices":[[3.1624916,4.1462793,-2.2499997],[4.0285169,4.1462793,-1.7499998],[3.1624916,5.1462793,-2.2499997],[4.0285169,5.1462793,-1.7499998]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-8.png"},{"name":"bushu_5_on","vertices":[[3.1624916,4.1462793,-2.2499997],[4.0285169,4.1462793,-1.7499998],[3.1624916,5.1462793,-2.2499997],[4.0285169,5.1462793,-1.7499998]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-9.png"},{"name":"bushu_6","vertices":[[3.5874932,2.4108748,-2.2499996],[4.4535186,2.4108748,-1.7499999],[3.5874932,3.4108748,-2.2499996],[4.4535186,3.4108748,-1.7499999]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-10.png"},{"name":"bushu_6_on","vertices":[[3.5874931,2.4108748,-2.2499994],[4.4535187,2.4108748,-1.7500001],[3.5874931,3.4108748,-2.2499994],[4.4535187,3.4108748,-1.7500001]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-11.png"},{"name":"bushu_7","vertices":[[0.8127359,2.4022162,-1.9999999],[1.8127357,2.4022162,-2.0000001],[0.8127359,3.4022162,-1.9999999],[1.8127357,3.4022162,-2.0000001]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-12.png"},{"name":"bushu_7_on","vertices":[[0.8127359,2.4022162,-1.9999999],[1.8127357,2.4022162,-2.0000001],[0.8127359,3.4022162,-1.9999999],[1.8127357,3.4022162,-2.0000001]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-13.png"},{"name":"bushu_8","vertices":[[2.8463087,0.7860484,-2.2499998],[3.7123342,0.7860484,-1.7500002],[2.8463087,1.7860484,-2.2499998],[3.7123342,1.7860484,-1.7500002]],"uv":[[0.06619703769683838,0.9338029623031616],[0.9338029623031616,0.9338029623031616],[0.06619703769683838,0.06619703769683838],[0.9338029623031616,0.06619703769683838]],"indices":[0,1,3,0,3,2],"image":"bushu-14.png"},{"name":"bushu_8_on","vertices":[[2.8463087,0.7860484,-2.2499999],[3.7123342,0.7860484,-1.7500001],[2.8463087,1.7860484,-2.2499999],[3.7123342,1.7860484,-1.7500001]],"uv":[[0.06619703769683838,0.9338029623031616],[0.9338029623031616,0.9338029623031616],[0.06619703769683838,0.06619703769683838],[0.9338029623031616,0.06619703769683838]],"indices":[0,1,3,0,3,2],"image":"bushu-15.png"},{"name":"bushu_9","vertices":[[0.4317734,0.3923713,-1.9999999],[1.4317733,0.3923713,-2.0000006],[0.4317734,1.3923713,-1.9999999],[1.4317733,1.3923713,-2.0000006]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-16.png"},{"name":"bushu_9_on","vertices":[[0.4317734,0.3923713,-1.9999996],[1.4317733,0.3923713,-2.0000009],[0.4317734,1.3923713,-1.9999996],[1.4317733,1.3923713,-2.0000009]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-17.png"},{"name":"bushu_10","vertices":[[-0.8985337,1.6823008,-1.9999998],[0.1014663,1.6823008,-2.0],[-0.8985337,2.6823008,-1.9999998],[0.1014663,2.6823008,-2.0]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-18.png"},{"name":"bushu_10_on","vertices":[[-0.8985337,1.6823008,-1.9999998],[0.1014663,1.6823008,-2.0],[-0.8985337,2.6823008,-1.9999998],[0.1014663,2.6823008,-2.0]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-19.png"},{"name":"bushu_11","vertices":[[-2.1183566,0.4065235,-2.0000002],[-1.1183568,0.4065235,-2.0000003],[-2.1183566,1.4065235,-2.0000002],[-1.1183568,1.4065235,-2.0000003]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-20.png"},{"name":"bushu_11_on","vertices":[[-2.1183566,0.4065235,-2.0000003],[-1.1183568,0.4065235,-2.0000002],[-2.1183566,1.4065235,-2.0000003],[-1.1183568,1.4065235,-2.0000002]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-21.png"},{"name":"bushu_12","vertices":[[-2.3786352,2.2086473,-1.9999999],[-1.3786352,2.2086473,-1.9999999],[-2.3786352,3.2086473,-1.9999999],[-1.3786352,3.2086473,-1.9999999]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-22.png"},{"name":"bushu_12_on","vertices":[[-2.3786352,2.2086473,-1.9999997],[-1.3786352,2.2086473,-2.0],[-2.3786352,3.2086473,-1.9999997],[-1.3786352,3.2086473,-2.0]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-23.png"},{"name":"bushu_13","vertices":[[-3.8271476,0.757421,-1.7500001],[-2.9611224,0.757421,-2.2500004],[-3.8271476,1.757421,-1.7500001],[-2.9611224,1.757421,-2.2500004]],"uv":[[0.06016448140144348,0.9398355484008789],[0.9398355484008789,0.9398355484008789],[0.06016448140144348,0.060164451599121094],[0.9398355484008789,0.060164451599121094]],"indices":[0,1,3,0,3,2],"image":"bushu-24.png"},{"name":"bushu_13_on","vertices":[[-3.8271476,0.757421,-1.7500001],[-2.9611224,0.757421,-2.2500004],[-3.8271476,1.757421,-1.7500001],[-2.9611224,1.757421,-2.2500004]],"uv":[[0.06016448140144348,0.9398355484008789],[0.9398355484008789,0.9398355484008789],[0.06016448140144348,0.060164451599121094],[0.9398355484008789,0.060164451599121094]],"indices":[0,1,3,0,3,2],"image":"bushu-25.png"},{"name":"bushu_14","vertices":[[-4.1932155,2.8714538,-1.7499997],[-3.3271903,2.8714538,-2.2499998],[-4.1932155,3.8714538,-1.7499997],[-3.3271903,3.8714538,-2.2499998]],"uv":[[0.05944567918777466,0.9405543208122253],[0.9405543208122253,0.9405543208122253],[0.05944567918777466,0.05944567918777466],[0.9405543208122253,0.05944567918777466]],"indices":[0,1,3,0,3,2],"image":"bushu-26.png"},{"name":"bushu_14_on","vertices":[[-4.1932154,2.8714538,-1.7499996],[-3.3271903,2.8714538,-2.2499999],[-4.1932154,3.8714538,-1.7499996],[-3.3271903,3.8714538,-2.2499999]],"uv":[[0.05944567918777466,0.9405543208122253],[0.9405543208122253,0.9405543208122253],[0.05944567918777466,0.05944567918777466],[0.9405543208122253,0.05944567918777466]],"indices":[0,1,3,0,3,2],"image":"bushu-27.png"},{"name":"bushu_15","vertices":[[-3.3830539,4.4129896,-1.7499997],[-2.5170287,4.4129896,-2.2499998],[-3.3830539,5.4129896,-1.7499997],[-2.5170287,5.4129896,-2.2499998]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-28.png"},{"name":"bushu_15_on","vertices":[[-3.3830539,4.4129896,-1.7499997],[-2.5170287,4.4129896,-2.2499998],[-3.3830539,5.4129896,-1.7499997],[-2.5170287,5.4129896,-2.2499998]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-29.png"},{"name":"bushu_16","vertices":[[-3.6611861,6.3057265,-1.7499992],[-2.7951609,6.3057265,-2.2499993],[-3.6611861,7.3057265,-1.7499992],[-2.7951609,7.3057265,-2.2499993]],"uv":[[0.041411399841308594,0.9585886001586914],[0.9585886001586914,0.9585886001586914],[0.041411399841308594,0.041411399841308594],[0.9585886001586914,0.041411399841308594]],"indices":[0,1,3,0,3,2],"image":"bushu-30.png"},{"name":"bushu_16_on","vertices":[[-3.6611861,6.3057265,-1.7499992],[-2.7951609,6.3057265,-2.2499993],[-3.6611861,7.3057265,-1.7499992],[-2.7951609,7.3057265,-2.2499993]],"uv":[[0.041411399841308594,0.9585886001586914],[0.9585886001586914,0.9585886001586914],[0.041411399841308594,0.041411399841308594],[0.9585886001586914,0.041411399841308594]],"indices":[0,1,3,0,3,2],"image":"bushu-31.png"},{"name":"bushu_17","vertices":[[-1.7788507,5.175199,-1.9999997],[-0.7788509,5.175199,-1.9999999],[-1.7788507,6.175199,-1.9999997],[-0.7788509,6.175199,-1.9999999]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-32.png"},{"name":"bushu_17_on","vertices":[[-1.7788507,5.175199,-1.9999997],[-0.7788509,5.175199,-1.9999999],[-1.7788507,6.175199,-1.9999997],[-0.7788509,6.175199,-1.9999999]],"uv":[[0.0,1.0],[1.0,1.0],[0.0,0.0],[1.0,0.0]],"indices":[0,1,3,0,3,2],"image":"bushu-33.png"},{"name":"bushu_18","vertices":[[-1.5414196,6.771224,-1.9999994],[-0.5414197,6.771224,-1.9999996],[-1.5414196,7.771224,-1.9999994],[-0.5414197,7.771224,-1.9999996]],"uv":[[0.04999998211860657,0.9500000476837158],[0.9500000476837158,0.9500000476837158],[0.04999998211860657,0.04999995231628418],[0.9500000476837158,0.04999995231628418]],"indices":[0,1,3,0,3,2],"image":"bushu-34.png"},{"name":"bushu_18_on","vertices":[[-1.5414196,6.771224,-1.9999994],[-0.5414197,6.771224,-1.9999997],[-1.5414196,7.771224,-1.9999994],[-0.5414197,7.771224,-1.9999997]],"uv":[[0.04999998211860657,0.9500000476837158],[0.9500000476837158,0.9500000476837158],[0.04999998211860657,0.04999995231628418],[0.9500000476837158,0.04999995231628418]],"indices":[0,1,3,0,3,2],"image":"bushu-35.png"},{"name":"ok","vertices":[[-0.5,3.5,-2.0],[0.5,3.5,-2.0],[-0.5,4.5,-2.0],[0.5,4.5,-2.0]],"uv":[[0.09690624475479126,0.9030937552452087],[0.9030937552452087,0.9030937552452087],[0.09690624475479126,0.09690624475479126],[0.9030937552452087,0.09690624475479126]],"indices":[0,1,3,0,3,2],"image":"bushu-36.png"},{"name":"ok_on","vertices":[[-0.5,3.5,-1.9999997],[0.5,3.5,-2.0000003],[-0.5,4.5,-1.9999997],[0.5,4.5,-2.0000003]],"uv":[[0.09690624475479126,0.9030937552452087],[0.9030937552452087,0.9030937552452087],[0.09690624475479126,0.09690624475479126],[0.9030937552452087,0.09690624475479126]],"indices":[0,1,3,0,3,2],"image":"bushu-37.png"}],"sha256":"6b97d83fc305f528a3e7e68c1500eb92af4b7a7eacac19e0b0a00bfd4b6d8eec"}},"scenes":{"zbwe9e4":{"ui":{"conversation_button":"assets/ui/d8ad825ce5792f98.png","log_list_container_bg":"assets/ui/fe0f226f3b9e268b.png","close_button":"assets/ui/7047ac7b60cdf348.png","wipe_bg":"assets/ui/34543973ecd744d5.png","wipe_img":"assets/ui/a353f5169f37fefb.png","reset":"assets/ui/03783c7ed3fbb0d8.png","branch_yes":"assets/ui/e79421c0121f43b5.png","branch_no":"assets/ui/3df606b17723d640.png","input":"assets/ui/0fc71968fc35a0a9.png","decision":"assets/ui/201ef079fb910645.png","info_bg":"assets/ui/bff812afa38dfa59.png","info_close_button":"assets/ui/f5717bc69d56fb1a.png","branch_bg":"assets/ui/761e9fe7d3afa311.png","digital_bg":"assets/ui/6468d02da855fd2d.png","info":"assets/ui/c2f1941c813e64b2.png","log-area":"assets/ui/8e74be89f81119c1.png","log-area-name":"assets/ui/6acd03cf74c581a1.png","correct":"assets/ui/8f4604069963578d.png","voice_on":"assets/ui/e7cf8238c1e032dc.png","voice_off":"assets/ui/bf0020fcb7e9cb0d.png","log_list_container_bg_top":"assets/ui/7d3edb2122f7b4fd.png","log_list_container_bg_bottom":"assets/ui/efb1a4fefb2d8886.png","message":"assets/ui/cdc02366edb96210.png"},"audio":{"BGM01":"assets/audio/7772970462eb38d9.m4a","BGM02":"assets/audio/a0d2f795ac2f5b9d.m4a","SE_all":"assets/audio/278143d028f0a95c.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3","SE_memory":"assets/audio/f5cdc3d5eb847c34.mp3"},"assets":{"nazo_2":{"path":"assets/media/3782c5894f0dcf34.png"},"nazo_1":{"path":"assets/media/bf45bbbed3b9d036.png"},"nazo_3":{"path":"assets/media/8f0f8169d734715f.png"},"nazo_4":{"path":"assets/media/edf16cd1d4392bdd.png"},"nazo_5":{"path":"assets/media/c5dceabfdefa639b.png"},"nazo_6":{"path":"assets/media/757ab91510c3eabe.png"}},"questions":{"question_1":{"answer":{"correct":["エキスパート"],"warning":[]},"message":{"warning":""}},"question_2":{"answer":{"correct":["ミサイル"],"warning":[]},"message":{"warning":""}},"question_3":{"answer":{"correct":["コサイン"],"warning":[]},"message":{"warning":""}},"question_4":{"answer":{"correct":["イルミネート"],"warning":[]},"message":{"warning":""}},"question_5":{"answer":{"correct":["コンパス"],"warning":[]},"message":{"warning":""}},"question_6":{"answer":{"correct":["イーストキン"],"warning":[]},"message":{"warning":""}},"question_7":{"answer":{"correct":["インストール","いんすとーる"],"warning":["コンパス","エキスパート","イーストキン","イルミネート","ミサイル","コサイン"]},"message":{"warning":"ここには冊子6ページで求めた【記憶データⅠパスワード】を入力するんだ。"}}}},"fjzef86":{"ui":{"conversation_button":"assets/ui/316e50ef5fc2a9d3.png","log_list_container_bg":"assets/ui/f0d88a71ec4375de.png","close_button":"assets/ui/3a04ef619724b232.png","wipe_bg":"assets/ui/3417bd756f1c00d9.png","wipe_img":"assets/ui/b0a5b53d69b0657e.png","reset":"assets/ui/3d2d2ce725e10bba.png","input":"assets/ui/65d098fded67459b.png","decision":"assets/ui/3d7c5360bd5a899e.png","info_bg":"assets/ui/9cfd75dbe78218ff.png","info_close_button":"assets/ui/3c4cf21ae527f457.png","digital_bg":"assets/ui/79435a44231472cc.png","info":"assets/ui/68d00a5f4c2a07ed.png","log-area":"assets/ui/4af52fa16bbc77cb.png","log-area-name":"assets/ui/334820f55d667741.png","correct":"assets/ui/97c44019d125d631.png","voice_on":"assets/ui/641a4cf4ac76bb0d.png","voice_off":"assets/ui/f4a2097dbe37a8d0.png","log_list_container_bg_top":"assets/ui/a83dd708d26ba83a.png","log_list_container_bg_bottom":"assets/ui/7fa6d69d14d579af.png","message":"assets/ui/0ea5c5b2a0ee18f0.png"},"audio":{"BGM01":"assets/audio/f9d9fc8c3176f093.m4a","BGM02":"assets/audio/a02713e11fbe3b32.m4a","SE_all":"assets/audio/83b151fb9ef89148.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3","SE_memory":"assets/audio/f5cdc3d5eb847c34.mp3"},"assets":{"nazo_1":{"path":"assets/media/5746e14fcd2973f9.png"},"nazo_2":{"path":"assets/media/77d8461a57b613ec.png"},"nazo_3":{"path":"assets/media/9da63bc87f0a6f8b.png"},"nazo_4":{"path":"assets/media/3210e45fa76c495e.png"},"nazo_5":{"path":"assets/media/6335aa01a059aea7.png"},"nazo_6":{"path":"assets/media/646b7caa722f4884.png"},"nazo2_2":{"path":"assets/media/969ed81c4d992ac5.png"},"nazo2_1":{"path":"assets/media/ea917f233854ac15.png"},"nazo2_3":{"path":"assets/media/d3c76a1b0333b058.png"},"nazo_1_on":{"path":"assets/media/31c44cd3408aed32.png"},"nazo_2_on":{"path":"assets/media/f220f271595a5087.png"},"nazo_3_on":{"path":"assets/media/168a2cc47ed62fd9.png"},"nazo_4_on":{"path":"assets/media/d7d9f3a1194cd190.png"},"nazo_5_on":{"path":"assets/media/2b5e0daa225240b2.png"},"nazo_6_on":{"path":"assets/media/d34d10284a4f45ef.png"}},"questions":{"question_1":{"answer":{"correct":["アスリート"],"warning":[]},"message":{"warning":""}},"question_2":{"answer":{"correct":["アックス"],"warning":[]},"message":{"warning":""}},"question_3":{"answer":{"correct":["トリック"],"warning":[]},"message":{"warning":""}},"question_7":{"answer":{"correct":["クリス","くりす"],"warning":["トリック","アックス","アスリート"]},"message":{"warning":"ここには冊子7ページで求めた【記憶データⅡパスワード】を入力するんだ。"}}}},"kuf47ne":{"ui":{"conversation_button":"assets/ui/e6d68985c0ba8cdc.png","delete_on_button":"assets/ui/5eb8d78424a1f5a0.png","delete_off_button":"assets/ui/54e7102697b76dca.png","log_list_container_bg":"assets/ui/ab8846b52a81f80d.png","close_button":"assets/ui/96a8739208ba88ba.png","wipe_bg":"assets/ui/82a37faa66127a5a.png","wipe_img":"assets/ui/6b2a669b778eb778.png","reset":"assets/ui/f1cb651bacc9568f.png","input":"assets/ui/9a79999f1d73f713.png","decision":"assets/ui/1483eb501cb0fa49.png","info_bg":"assets/ui/6b38bb199615bbea.png","info_close_button":"assets/ui/1f109ee2ae16891c.png","digital_bg":"assets/ui/840b29c3c4b82a9d.png","info":"assets/ui/3dedefb2b56c24aa.png","log-area":"assets/ui/4b0d8fbf0bc28409.png","log-area-name":"assets/ui/dd7ae6c20b27fd2b.png","gear":"assets/ui/9ea86ef7cf8e4aa3.png","noise":"assets/ui/a81d82b1bddaca7f.png","ring":"assets/ui/066ba6e270b4994d.png","search":"assets/ui/5669b23bb07c9ae5.png","correct":"assets/ui/cbc2ea20b8d61042.png","delete_ok_button":"assets/ui/685a8c56f0c62426.png","call_display_kurisu":"assets/ui/919a33c9d76834c3.png","call_display":"assets/ui/9e3147b24c1ad819.png","change_input":"assets/ui/868d684ee10be80c.png","nazo_noise":"assets/ui/d32f5ec6130fac3c.png","nazo_howling":"assets/ui/cdcc7e4e0f033b91.png","nazo_kioku":"assets/ui/207f5745a6920aa9.png","voice_on":"assets/ui/c1672efa69d21643.png","voice_off":"assets/ui/c5881a534e734efe.png","noize_note":"assets/ui/8ebeea13e3a461d8.png","howling_note":"assets/ui/f113b6fd329344f2.png","log_list_container_bg_top":"assets/ui/17701bb08d574e49.png","log_list_container_bg_bottom":"assets/ui/b81cea0f314b7a8d.png"},"audio":{"BGM01":"assets/audio/599f1b75813fd33c.m4a","BGM02":"assets/audio/a02713e11fbe3b32.m4a","SE_all":"assets/audio/88041855d917f58c.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3","SE_howling":"assets/audio/e2ff6538a4417c7c.mp3","SE_suzu":"assets/audio/5236a97c40bcad4c.mp3","SE_memory":"assets/audio/f5cdc3d5eb847c34.mp3"},"assets":{"nazo_kioku":{"path":"assets/media/211d22b713019698.png"},"noise":{"path":"assets/media/b39181dfa0407969.png"}},"questions":{"question_1":{"answer":{"correct":["ノイズ"],"warning":[]},"message":{"warning":""}},"question_2":{"answer":{"correct":["ずのう","ズノウ","頭脳"],"warning":[]},"message":{"warning":""}},"question_3":{"answer":{"correct":["ハウリング"],"warning":[]},"message":{"warning":""}},"question_4":{"answer":{"correct":["ネクスト","ねくすと","NEXT"],"warning":["next","Next"]},"message":{"warning":""}},"question_5":{"answer":{"correct":["ワールド","わーるど","ワーるド"],"warning":[]},"message":{"warning":""}}}},"fjalg332":{"ui":{"conversation_button":"assets/ui/de30a17f232cc3e9.png","log_list_container_bg":"assets/ui/f03ad3c10906ce27.png","close_button":"assets/ui/0e7633e3f00d839a.png","wipe_bg":"assets/ui/7d44560d57ad7604.png","wipe_img":"assets/ui/7708ac46de76ae75.png","reset":"assets/ui/c64ef369139377c9.png","input":"assets/ui/cdb326460f8f1a17.png","decision":"assets/ui/cb325af6221ee677.png","info_bg":"assets/ui/76a1433466d2effb.png","info_close_button":"assets/ui/4a43d3596f85a22f.png","digital_bg":"assets/ui/fb1a10df4fb132ca.png","info":"assets/ui/ff0ffc81b3f54ecb.png","log-area":"assets/ui/f9293a4e21e99804.png","log-area-name":"assets/ui/5b6bad035af1bb2b.png","mall":"assets/ui/58917159a464be33.png","voice_on":"assets/ui/300d8a6aa1374175.png","voice_off":"assets/ui/2d4b80937cc77072.png","clear_bg":"assets/ui/c9973a8b102f537d.png","clear_btn":"assets/ui/c81fd3cd6432b5f5.png","clear_info":"assets/ui/4566980e37de10a0.png","clear_end":"assets/ui/5d88abe816693be2.png","clear":"assets/ui/1b43759f11e6ee0c.png","log_list_container_bg_top":"assets/ui/89ff2fe4afcfc58e.png","log_list_container_bg_bottom":"assets/ui/39fff72244987df0.png"},"audio":{"BGM01":"assets/audio/599f1b75813fd33c.m4a","SE.mp3":"assets/audio/c1898cefdf6c610a.mp3","SE_all":"assets/audio/022e69c78c11e147.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3"},"assets":{},"questions":{}},"ppgn4ri":{"ui":{"conversation_button":"assets/ui/06407a7b634e4e0f.png","log_list_container_bg":"assets/ui/317546daab48340c.png","close_button":"assets/ui/90886cb369c462ff.png","wipe_bg":"assets/ui/eafb76c3e1646aed.png","wipe_img":"assets/ui/2bafba62d0cc4bd9.png","info_bg":"assets/ui/2db4e3d8a2435ad3.png","info_close_button":"assets/ui/53cb637784e2b878.png","bg_gray":"assets/ui/85167ff939d39a3e.png","digital_bg":"assets/ui/f75e59986e4c25e4.png","info":"assets/ui/1fa53e8fb33ecc2b.png","log-area":"assets/ui/e7baa16e00d7fa8c.png","log-area-name":"assets/ui/ece138a1726b45a7.png","wipe_phone":"assets/ui/89228507b2d1a8aa.png","wipe_phone_img":"assets/ui/778ba5be8e58f863.png","map_button":"assets/ui/6ab4697568679255.png","voice_on":"assets/ui/e53e50e7d0f1b0d8.png","voice_off":"assets/ui/489138ba86e2f4fe.png","log_list_container_bg_top":"assets/ui/509c97f57ac62461.png","log_list_container_bg_bottom":"assets/ui/28bfb2acddb803fe.png"},"audio":{"BGM01":"assets/audio/eda08bd572807f6d.m4a","SE.mp3":"assets/audio/c1898cefdf6c610a.mp3","BGM02":"assets/audio/ff58cc56177eb71c.m4a","SE_all":"assets/audio/b3e7ec9a61282af3.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3"},"assets":{},"questions":{}},"pk95ywe":{"ui":{"conversation_button":"assets/ui/c33b5fd7b164954b.png","log_list_container_bg":"assets/ui/277cb6cbc3b7c9f5.png","close_button":"assets/ui/86d039174cd8c751.png","wipe_bg":"assets/ui/e3392d7ae87c6779.png","wipe_img":"assets/ui/90115477ec975d0b.png","info_bg":"assets/ui/b3282068a9d7dd25.png","info_close_button":"assets/ui/7a33e620182ea14b.png","bg_gray":"assets/ui/bc6d2b7cc527ef39.png","info":"assets/ui/5fd9ac39f90ab9cc.png","log-area":"assets/ui/53510aafcc57653b.png","log-area-name":"assets/ui/54a0baf7fb3953b3.png","wipe_phone":"assets/ui/38a0f4864edac52c.png","wipe_phone_img":"assets/ui/1eb47fedfb3b5e33.png","input":"assets/ui/263ae2e4f824d86c.png","decision":"assets/ui/c74faed65ea43105.png","key_visual":"assets/ui/7a1de279ffcd1dac.png","map_button":"assets/ui/e8c776c7da557be5.png","correct":"assets/ui/20fa808f4398c9f9.png","digital_bg":"assets/ui/6e0443f112f22c0a.png","voice_on":"assets/ui/6ce96c6508ab6c4f.png","voice_off":"assets/ui/659fdeec6f550a87.png","key_visual_button":"assets/ui/1cd573d2423cdb70.png","log_list_container_bg_top":"assets/ui/f7c80b28938ad1de.png","log_list_container_bg_bottom":"assets/ui/a9da88e640ba2a80.png","message":"assets/ui/880bad0b3dbfc8fc.png"},"audio":{"BGM01":"assets/audio/a0d2f795ac2f5b9d.m4a","SE.mp3":"assets/audio/c1898cefdf6c610a.mp3","BGM02":"assets/audio/ff58cc56177eb71c.m4a","SE_all":"assets/audio/e6a26622ada76194.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3","SE_memory":"assets/audio/f5cdc3d5eb847c34.mp3"},"assets":{},"questions":{"question_1":{"answer":{"correct":["アオイハート","あおいはーと"],"warning":[]},"message":{"warning":""}}}},"5ey3se2":{"ui":{"conversation_button":"assets/ui/3e087172177e65ce.png","log_list_container_bg":"assets/ui/b1e34905fec2d84e.png","close_button":"assets/ui/c89fe46048ce0bc1.png","wipe_bg":"assets/ui/de0a79eeea8f8670.png","wipe_img":"assets/ui/a1391363eafc21df.png","info_bg":"assets/ui/80a827e38dbbd8c5.png","info_close_button":"assets/ui/994a6dab2bcf118f.png","bg_gray":"assets/ui/900a7bb54215f6e0.png","digital_bg":"assets/ui/c0ca2498cac311b5.png","info":"assets/ui/bd66737ee23ff545.png","log-area":"assets/ui/9ffae335098b79ef.png","log-area-name":"assets/ui/bf1c12934b0ed470.png","wipe_phone":"assets/ui/13bc26927cb2ae4a.png","wipe_phone_img":"assets/ui/2423149e99c08ca2.png","input":"assets/ui/3cb360d97270806f.png","decision":"assets/ui/60596c5e3b374be6.png","correct":"assets/ui/8b6163553589db7f.png","voice_on":"assets/ui/c5ff479088b889c4.png","voice_off":"assets/ui/a8d5c565da6c85a5.png","log_list_container_bg_top":"assets/ui/aac79f6a3dc8b38b.png","log_list_container_bg_bottom":"assets/ui/8086fb03e833923c.png"},"audio":{"BGM01":"assets/audio/5873ed3609dd262f.m4a","SE.mp3":"assets/audio/c1898cefdf6c610a.mp3","BGM02":"assets/audio/a02713e11fbe3b32.m4a","SE_all":"assets/audio/d170872ba2c8a8e4.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3","SE_memory":"assets/audio/f5cdc3d5eb847c34.mp3"},"assets":{},"questions":{"question_1":{"answer":{"correct":["せかいせん","世界線","セカイセン"],"warning":[]},"message":{"warning":""}}}},"fryi3j5":{"ui":{"info":"assets/ui/4427caecae172e4b.png","info_bg":"assets/ui/c41c8c352c49a486.png","info_close_button":"assets/ui/f85d467d3d3bfc0f.png","log-area":"assets/ui/fae20c09c1e47261.png","log-area-name":"assets/ui/7a929324daf18bcb.png","conversation_button":"assets/ui/1c38932b2b2bf95a.png","log_list_container_bg":"assets/ui/0a0f45a59757aec3.png","close_button":"assets/ui/f4f6d868bc48178a.png","wipe_bg":"assets/ui/089fcbcb431918be.png","wipe_img":"assets/ui/ea5b7fed7f7a050d.png","digital_bg":"assets/ui/1ef564e29d0fafc1.png","wipe_phone":"assets/ui/99ce239d026ca1ac.png","wipe_phone_img":"assets/ui/0ed407bda1af782f.png","delete_ok_button":"assets/ui/49b63d1225050cfb.png","correct":"assets/ui/093f7d19c510fa39.png","okabe":"assets/ui/54863da7defb86dd.png","voice_on":"assets/ui/1e13fc3f5e134e66.png","voice_off":"assets/ui/45e39687b636c68d.png","clear_bg":"assets/ui/df4a01ef62126922.png","clear":"assets/ui/381642d1486af1ac.png","clear_btn":"assets/ui/b19b3af51dba4394.png","clear_info":"assets/ui/d388b0b91e1f73df.png","clear_end":"assets/ui/6848213bf6beb726.png","log_list_container_bg_top":"assets/ui/49b32842b44d4aac.png","log_list_container_bg_bottom":"assets/ui/6b38581558e6677c.png","guide":"assets/ui/ee8a8415884f7f57.png"},"audio":{"BGM01":"assets/audio/71909c8df11216f6.m4a","BGM02":"assets/audio/a7636c6e245b0980.m4a","SE_all":"assets/audio/d599aae12699b8eb.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3","SE_incorrect":"assets/audio/ab6f08a0b6ca5163.mp3"},"assets":{"scr_amadeus_appear.mp4":{"path":"assets/media/c56f80211b8f390d.mp4"}},"questions":{}},"r7xnwci":{"ui":{"conversation_button":"assets/ui/b64e2af3efdd0ce3.png","log_list_container_bg":"assets/ui/16e17ec1628a20fc.png","close_button":"assets/ui/d8724ca3c459be6b.png","wipe_bg":"assets/ui/59f6c0840fcf071e.png","wipe_img":"assets/ui/4ae9741c7720b270.png","info_bg":"assets/ui/5c834ab3b6fdb897.png","info_close_button":"assets/ui/9c4471c3ad90231e.png","bg_gray":"assets/ui/e569d17cae993d8d.png","digital_bg":"assets/ui/9bf2b82a35009aea.png","info":"assets/ui/af5b1e01dc73cde5.png","log-area":"assets/ui/27719b9689bc4ca9.png","log-area-name":"assets/ui/331b0b7fd7f363d3.png","wipe_phone":"assets/ui/a76e6e02299fd4a5.png","wipe_phone_img":"assets/ui/5fe19e0c610a8044.png","input":"assets/ui/ce8c11711e8c1d61.png","decision":"assets/ui/4e6d905f423952e9.png","reset":"assets/ui/8b02ee4980895ca2.png","voice_on":"assets/ui/d036d50d8bc36f2d.png","voice_off":"assets/ui/28f6e5e9af20faff.png","log_list_container_bg_top":"assets/ui/a24c1655575f7505.png","log_list_container_bg_bottom":"assets/ui/1e2b9abbf1667f26.png"},"audio":{"BGM01":"assets/audio/d0983cb9ba557c9c.m4a","SE.mp3":"assets/audio/c1898cefdf6c610a.mp3","BGM02":"assets/audio/17e092d251f437ed.m4a","BGM03":"assets/audio/a02713e11fbe3b32.m4a","SE_all":"assets/audio/d9aac3958400fd67.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3","SE_memory":"assets/audio/69f9eecffba759a3.mp3"},"assets":{"meter":{"path":"assets/media/886865d83757c718.mp4"}},"questions":{}},"bkucguk":{"ui":{"info_bg":"assets/ui/7d3fcc00a24ee4f7.png","info":"assets/ui/4809b11926b56145.png","info_close_button":"assets/ui/4c7d051c346f6591.png","digital_bg":"assets/ui/0f3d9d525939c437.png","okabe_bk":"assets/ui/c4740c712046ce80.png","log-area":"assets/ui/4f816213b3cfc9d8.png","log-area-name":"assets/ui/778e9e67d852ae46.png","reset":"assets/ui/97302596705c4ea1.png","left":"assets/ui/8d7123a54262fa94.png","right":"assets/ui/cbb86c20150c58aa.png","voice_on":"assets/ui/66ae4dfabc0b2b29.png","voice_off":"assets/ui/898cdb2b0ab6d957.png"},"audio":{"BGM01":"assets/audio/a02713e11fbe3b32.m4a","SE_all":"assets/audio/6f4128b8b32ca10f.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3"},"assets":{},"questions":{"question_1":{"answer":{"correct":["みずうみ","さむらい"],"warning":[]},"message":{"warning":""}},"question_2":{"answer":{"correct":[1,13,10,17,18,9,5],"warning":[]},"message":{"warning":""}}}},"sad97sf":{"ui":{"info_bg":"assets/ui/fe630525835791df.png","info":"assets/ui/b32cce91c00538d8.png","info_close_button":"assets/ui/fe62a35a6856859f.png","digital_bg":"assets/ui/4260e24081b3bc7a.png","okabe_bk":"assets/ui/6fdccbf2752a79a2.png","log-area":"assets/ui/b62383b616f34362.png","log-area-name":"assets/ui/4aaf9592b6fed941.png","reset":"assets/ui/f9f0a5c3285ea325.png","input":"assets/ui/ee64ae70de41f58a.png","decision":"assets/ui/43fe31e23990d9c5.png","correct":"assets/ui/53f5b4ff0e2b15ef.png","voice_on":"assets/ui/9607cd188662097c.png","voice_off":"assets/ui/272933f491d885da.png"},"audio":{"BGM01":"assets/audio/a02713e11fbe3b32.m4a","SE_all":"assets/audio/6f4128b8b32ca10f.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3"},"assets":{},"questions":{"question_1":{"answer":{"correct":["失敗"],"warning":[]},"message":{"warning":""}}}},"74ngv74":{"ui":{"conversation_button":"assets/ui/3e3c2c40355c9dfb.png","log_list_container_bg":"assets/ui/f910b28b19528440.png","close_button":"assets/ui/13b0efdb5a2b01f6.png","wipe_bg":"assets/ui/2d1502d9c725a4a1.png","wipe_img":"assets/ui/71f77d946c34e12f.png","info_bg":"assets/ui/5cae1feeb4e4dc2d.png","info_close_button":"assets/ui/2c3ead5996e1d43f.png","bg_gray":"assets/ui/d2ea373cd6fd082a.png","digital_bg":"assets/ui/1c43acb45de3dcbe.png","info":"assets/ui/5c55968fa74f35eb.png","log-area":"assets/ui/2020c252e7441b60.png","log-area-name":"assets/ui/4fd608a8a8a7ca11.png","wipe_phone":"assets/ui/fd2b14b885837be8.png","wipe_phone_img":"assets/ui/5ab5e952baf8ad38.png","reset":"assets/ui/29b4ed75d039546e.png","voice_on":"assets/ui/be48efaba9fc9d6b.png","voice_off":"assets/ui/cc938418852dfff3.png","log_list_container_bg_top":"assets/ui/06b83e3ede34243c.png","log_list_container_bg_bottom":"assets/ui/2562e3b80952b40b.png"},"audio":{"BGM01":"assets/audio/1837690614ab8594.m4a","SE.mp3":"assets/audio/c1898cefdf6c610a.mp3","BGM02":"assets/audio/d7a9897e227ce3a7.m4a","SE_all":"assets/audio/607dd60c3eb5a928.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3"},"assets":{"meter":{"path":"assets/media/886865d83757c718.mp4"}},"questions":{}},"yddnar9":{"ui":{"conversation_button":"assets/ui/994dcce47e9dc8ce.png","log_list_container_bg":"assets/ui/0e6a671bb77cdaac.png","close_button":"assets/ui/da4a21511cd2e79f.png","wipe_bg":"assets/ui/333be0a22ec84f4d.png","wipe_img":"assets/ui/b63bc16f1ff5b02a.png","info_bg":"assets/ui/0be431c1ab3a49b7.png","info_close_button":"assets/ui/6eccf6b0a09b7d3c.png","bg_gray":"assets/ui/6f14039e1748f230.png","digital_bg":"assets/ui/852d07907a42d871.png","info":"assets/ui/cea4e26421bbc0b6.png","log-area":"assets/ui/57e83fef7f5641e8.png","log-area-name":"assets/ui/4ec7ea83fbe02096.png","wipe_phone":"assets/ui/b72c23dd331ac238.png","wipe_phone_img":"assets/ui/2d6b31259028e407.png","input":"assets/ui/76d41995ea1faaf1.png","decision":"assets/ui/101c87b55211d0c4.png","branch_bg":"assets/ui/9fc2fab4b3511c5f.png","branch_yes":"assets/ui/f53e688faf6342c6.png","branch_no":"assets/ui/5cd18f0119748959.png","branch_yes_right":"assets/ui/ce24729fa115fe91.png","delete_on_button":"assets/ui/b6c2037449b0b14c.png","delete_off_button":"assets/ui/5371f0802fc6d489.png","delete_ok_button":"assets/ui/d8b66501b76c2590.png","nazo":"assets/ui/ee9f24054132e452.png","correct":"assets/ui/2743728a29687765.png","reset":"assets/ui/4bb2c90f0c812496.png","voice_on":"assets/ui/d7697ad49fb85d79.png","voice_off":"assets/ui/d9ec846abd9dd557.png","log_list_container_bg_top":"assets/ui/428a9850632f7c5a.png","log_list_container_bg_bottom":"assets/ui/914ca3b418eb3ac1.png"},"audio":{"BGM01":"assets/audio/4e8db9da35b21df7.m4a","SE.mp3":"assets/audio/c1898cefdf6c610a.mp3","BGM02":"assets/audio/94477f90f38befbe.m4a","SE_all":"assets/audio/b3f5b4617420aa85.mp3","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3"},"assets":{},"questions":{"question_1":{"answer":{"correct":["オカベリンタロウ"],"warning":[]},"message":{"warning":""}},"question_2":{"answer":{"correct":["クリア","くりあ"],"warning":[]},"message":{"warning":""}}}},"82ezfsx":{"ui":{"conversation_button":"assets/ui/7c347d3ec785ad0b.png","log_list_container_bg":"assets/ui/6735b28001802092.png","close_button":"assets/ui/5f26656f2cca21ef.png","wipe_bg":"assets/ui/84ed53aa7b5f0fd7.png","wipe_img":"assets/ui/ca815b5ffe0d6016.png","info_bg":"assets/ui/6b7803411043e4fe.png","info_close_button":"assets/ui/17890e9865f25fda.png","bg_gray":"assets/ui/4ff02d5fc2a462d7.png","digital_bg":"assets/ui/15e23e0283d3df75.png","info":"assets/ui/530ccd7371f171c6.png","log-area":"assets/ui/d987a7fbe9fc2523.png","log-area-name":"assets/ui/2ce1cf30c8675a58.png","wipe_phone":"assets/ui/1ddd6c9c75cb78a3.png","wipe_phone_img":"assets/ui/7c4405f5d25a3ed9.png","reset":"assets/ui/6c7e5a32132befc4.png","voice_on":"assets/ui/241b04c2b362520a.png","voice_off":"assets/ui/42feb263798cdf16.png","clear_bg":"assets/ui/1bf517620b1e0fcd.png","clear":"assets/ui/a85a3e9e00c6a53d.png","clear_end":"assets/ui/e923662efc0102c9.png","clear_info":"assets/ui/d3531d61302ab2d8.png","clear_btn":"assets/ui/93afdf1fe2dddfe9.png","channel_display":"assets/ui/9fbd7995291ccda3.png","log_list_container_bg_top":"assets/ui/2a5a0c6e6b2b2bd0.png","log_list_container_bg_bottom":"assets/ui/c778a436552455de.png"},"audio":{"BGM01":"assets/audio/9510a7ebb8ff0e3d.m4a","SE.mp3":"assets/audio/c1898cefdf6c610a.mp3","BGM02":"assets/audio/b3228368846353c6.m4a","SE_all":"assets/audio/d8ea9768ee170a53.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3"},"assets":{"endroll.mp4":{"path":"assets/media/234c745152f14111.mp4"}},"questions":{}},"b7f11f61526a7f98":{"ui":{"conversation_button":"assets/ui/3952d171cd38254c.png","log_list_container_bg":"assets/ui/b12cce8c8e3ca675.png","close_button":"assets/ui/b46787e82965604a.png","wipe_bg":"assets/ui/dfcb0ca5d8c1c2dc.png","wipe_img":"assets/ui/55860c8a5c580237.png","reset":"assets/ui/d2f768de0b0c65e8.png","branch_yes":"assets/ui/2be46e9bfd377e2e.png","branch_no":"assets/ui/c4185dba0606ba92.png","input":"assets/ui/9ed51c9ad0cb7f92.png","decision":"assets/ui/c89bddc008e14f7e.png","info_bg":"assets/ui/c3b3976ae024cdfd.png","info_close_button":"assets/ui/23ba343e49bd53c1.png","branch_bg":"assets/ui/fdccd93f82925c1d.png","digital_bg":"assets/ui/8aea37a7e861b1c2.png","info":"assets/ui/330fdff4f86564c5.png","log-area":"assets/ui/70078bf3c2474e0e.png","log-area-name":"assets/ui/6776e6d066085bf3.png","correct":"assets/ui/2474db1e150818d2.png","voice_on":"assets/ui/8717b09b61e75c20.png","voice_off":"assets/ui/245351ee56a93e15.png","log_list_container_bg_top":"assets/ui/41cb44b079b0cff6.png","log_list_container_bg_bottom":"assets/ui/11fe06c85665757f.png","message":"assets/ui/eaf83ac6696dfba2.png","key_visual":"assets/ui/d179a0fd6d647b17.png","key_visual_button":"assets/ui/3d7f47dce8f3b030.png","trial_info":"assets/ui/29e8c69a924768ad.png","trial_info_close_button":"assets/ui/c2316331ed4222fa.png"},"audio":{"BGM01":"assets/audio/7772970462eb38d9.m4a","BGM02":"assets/audio/a0d2f795ac2f5b9d.m4a","SE_all":"assets/audio/278143d028f0a95c.m4a","SE_tap":"assets/audio/92fcc0e2ffa375aa.mp3","SE_memory":"assets/audio/f5cdc3d5eb847c34.mp3"},"assets":{"nazo_2":{"path":"assets/media/fd6353691e471053.png"},"nazo_1":{"path":"assets/media/99bc6c6b611bfbf3.png"},"nazo_3":{"path":"assets/media/e96a6c0ac52a4de6.png"},"nazo_4":{"path":"assets/media/a13df2bf3d42f33e.png"},"nazo_5":{"path":"assets/media/98f418b6f0d54d7e.png"},"nazo_6":{"path":"assets/media/f81c14ce9e6d276c.png"}},"questions":{"question_1":{"answer":{"correct":["エキスパート"],"warning":[]},"message":{"warning":""}},"question_2":{"answer":{"correct":["ミサイル"],"warning":[]},"message":{"warning":""}},"question_3":{"answer":{"correct":["コサイン"],"warning":[]},"message":{"warning":""}},"question_4":{"answer":{"correct":["イルミネート"],"warning":[]},"message":{"warning":""}},"question_5":{"answer":{"correct":["コンパス"],"warning":[]},"message":{"warning":""}},"question_6":{"answer":{"correct":["イーストキン"],"warning":[]},"message":{"warning":""}},"question_7":{"answer":{"correct":["インストール","いんすとーる"],"warning":["コンパス","エキスパート","イーストキン","イルミネート","ミサイル","コサイン"]},"message":{"warning":"ここには冊子6ページで求めた【記憶データⅠパスワード】を入力するんだ。"}}}}},"se":{"SE1_1_01":{"id":"SE1_1_01","start":1,"end":3.5},"SE1_1_35":{"id":"SE1_1_35","start":5.2,"end":11.3,"loop":"true"},"SE1_1_37":{"id":"SE1_1_37","start":13,"end":16},"SE1_1_42":{"id":"SE1_1_42","start":17,"end":22},"SE1_1_48":{"id":"SE1_1_48","start":23,"end":29},"SE1_1_49":{"id":"SE1_1_49","start":30,"end":32},"SE1_1_51":{"id":"SE1_1_51","start":33,"end":35},"SE1_1_52":{"id":"SE1_1_52","start":36,"end":37},"SE1_2_11":{"id":"SE1_2_11","start":1,"end":3},"SE1_2_22":{"id":"SE1_2_22","start":4.2,"end":10.3,"loop":"true"},"SE1_2_24":{"id":"SE1_2_24","start":12,"end":15},"SE1_2_28":{"id":"SE1_2_28","start":16,"end":18},"SE1_2_29_FAI":{"id":"SE1_2_29_FAI","start":19,"end":21},"SE1_2_29_CORa":{"id":"SE1_2_29_CORa","start":22,"end":23},"SE1_3_04":{"id":"SE1_3_04","start":1,"end":10},"SE1_3_10":{"id":"SE1_3_10","start":12,"end":14},"SE1_3_17":{"id":"SE1_3_17","start":15,"end":21},"SE1_3_68":{"id":"SE1_3_68","start":22,"end":28.4,"loop":"true"},"SE1_3_69":{"id":"SE1_3_69","start":34,"end":37},"SE1_3_73":{"id":"SE1_3_73","start":38,"end":40},"SE1_3_79":{"id":"SE1_3_79","start":41,"end":43},"SE1_3_79_FAI":{"id":"SE1_3_79_FAI","start":59,"end":60.5},"SE1_3_80":{"id":"SE1_3_80","start":75,"end":76},"SE1_3_81":{"id":"SE1_3_81","start":41,"end":43},"SE1_3_81_FAI":{"id":"SE1_3_81_FAI","start":59,"end":60.5},"SE1_3_82":{"id":"SE1_3_82","start":44,"end":56.11,"loop":"true"},"SE1_3_84_FAI":{"id":"SE1_3_84_FAI","start":59,"end":60.5},"SE1_3_85":{"id":"SE1_3_85","start":61.8,"end":63},"SE1_3_85_FAI":{"id":"SE1_3_85_FAI","start":59,"end":60.5},"SE1_3_86":{"id":"SE1_3_86","start":41,"end":43},"SE1_3_87_1":{"id":"SE1_3_87_1","start":58.1,"end":70.12},"SE1_3_87_FAI":{"id":"SE1_3_87_FAI","start":59,"end":60.5},"SE1_3_88_FAI":{"id":"SE1_3_88_FAI","start":59,"end":60.5},"SE1_3_88_CORa":{"id":"SE1_3_88_CORa","start":61.8,"end":63},"SE1_4_12_1":{"id":"SE1_4_12_1","start":1,"end":4},"SE1_4_22":{"id":"SE1_4_22","start":5,"end":6},"SE1_4_24":{"id":"SE1_4_24","start":7,"end":12.5},"SE2_1_05":{"id":"SE2_1_05","start":1,"end":3},"SE2_1_22":{"id":"SE2_1_22","start":4,"end":7.2},"SE2_1_27":{"id":"SE2_1_27","start":1,"end":3},"SE2_2_01":{"id":"SE2_2_01","start":26,"end":27},"SE2_2_01-outsider":{"id":"SE2_2_01-outsider","start":23,"end":24},"SE2_2_02":{"id":"SE2_2_02","start":1,"end":3},"SE2_2_04":{"id":"SE2_2_04","start":4.2,"end":10.3,"loop":"true"},"SE2_2_08":{"id":"SE2_2_08","start":12,"end":15},"SE2_2_14":{"id":"SE2_2_14","start":16,"end":22},"SE2_2_32":{"id":"SE2_2_32","start":1,"end":3},"SE2_3_01_ent":{"id":"SE2_3_01_ent","start":19,"end":20},"SE2_3_01_1":{"id":"SE2_3_01_1","start":16,"end":17},"SE2_3_01":{"id":"SE2_3_01","start":1,"end":3},"SE2_3_16":{"id":"SE2_3_16","start":4.2,"end":10.3,"loop":"true"},"SE2_3_17":{"id":"SE2_3_17","start":12,"end":14.5},"SE2_3_19":{"id":"SE2_3_19","start":1,"end":3},"SE2_4_0_1":{"id":"SE2_4_0_1","start":29,"end":30},"SE2_4_0_2":{"id":"SE2_4_0_2","start":29,"end":30},"SE2_4_0_3":{"id":"SE2_4_0_3","start":32,"end":33},"SE2_4_0_4":{"id":"SE2_4_0_4","start":1,"end":2},"SE2_4_01":{"id":"SE2_4_01","start":3,"end":12},"SE2_4_05":{"id":"SE2_4_05","start":13,"end":15},"SE2_4_07":{"id":"SE2_4_07","start":16,"end":18},"SE2_4_12":{"id":"SE2_4_12","start":13,"end":15},"SE2_4_18":{"id":"SE2_4_18","start":19,"end":23},"SE2_4_22":{"id":"SE2_4_22","start":16,"end":18},"SE2_4_23":{"id":"SE2_4_23","start":24,"end":27},"SE3_1_37":{"id":"SE3_1_37","start":1,"end":3},"SE3_1_41":{"id":"SE3_1_41","start":4,"end":13},"SE3_1_70":{"id":"SE3_1_70","start":14.2,"end":20.3,"loop":"true"},"SE3_1_72":{"id":"SE3_1_72","start":22,"end":25},"SE3_1_75":{"id":"SE3_1_75","start":26,"end":27},"SE3_2_30":{"id":"SE3_2_30","start":1,"end":5.5},"SE3_3_15_EXbtn":{"id":"SE3_3_15_EXbtn","start":1,"end":4},"SE3_3_27":{"id":"SE3_3_27","start":5,"end":6},"SE3_3_28_FAI":{"id":"SE3_3_28_FAI","start":7.3,"end":8.3},"SE3_3_29_FAI":{"id":"SE3_3_29_FAI","start":7.3,"end":8.3},"SE3_3_30":{"id":"SE3_3_30","start":10.3,"end":11.3},"SE3_4_04":{"id":"SE3_4_04","start":1,"end":5},"SE3_4_09":{"id":"SE3_4_09","start":1,"end":5},"SE3_4_18":{"id":"SE3_4_18","start":1,"end":5},"SE3_4_20_1":{"id":"SE3_4_20_1","start":6,"end":11.5},"SE3_4_21":{"id":"SE3_4_21","start":13,"end":13.5}}};
  const base = new URL(".", document.currentScript.src).href;
  const local = (p) => new URL(p, base).href;
  const retained = new Map();
  let active = null,
    muteActive = null;
  const titles = {
    "pair-memory": "记忆数据Ⅱ · 六张图的组合",
    "delete-noise": "DELETE · ノイズ",
    "delete-howling": "DELETE · ハウリング",
    "delete-okabe": "DELETE · 岡部倫太郎",
    "gear-memory": "记忆数据Ⅲ · 旋转齿轮与铃声",
    ex1: "记忆数据Ⅵ · 部首选择",
    ex2: "记忆数据Ⅵ · 最终口令",
    "ending-switch": "世界线变动开关",
  };
  const japaneseTitles = {
    "pair-memory": "記憶データⅡ · 6枚の画像の組み合わせ",
    "delete-noise": "DELETE · ノイズ",
    "delete-howling": "DELETE · ハウリング",
    "delete-okabe": "DELETE · 岡部倫太郎",
    "gear-memory": "記憶データⅢ · 歯車と鈴の音",
    "ex1": "記憶データⅥ · 部首の選択",
    "ex2": "記憶データⅥ · 最後のパスワード",
    "ending-switch": "世界線変動スイッチ"
};
  function open(container, options = {}) {
    if (!(container instanceof Element))
      throw new TypeError("KarkinosPuzzles.open requires a container");
    if (active) active();
    const sid = options.sceneId,
      event = options.eventId,
      defaults = SOURCE.scenes[sid] || {},
      data = { ...defaults, ...options.data };
    const japanese = data.language ? data.language === "ja" : document.documentElement.lang.toLowerCase().startsWith("ja");
    const t = (zh, ja) => japanese ? ja : zh;
    const title = japanese ? japaneseTitles[event] : titles[event];
    const root = document.createElement("section");
    root.className = "kp";
    root.lang = japanese ? "ja" : "zh-CN";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", title || t("原版交互道具", "謎解きアイテム"));
    const oldFocus = document.activeElement;
    let disposed = false,
      solved = false,
      muted = !!data.muted;
    const cleanups = [],
      timers = new Set(),
      audios = new Set();
    root.innerHTML =
      t('<header class="kp-header"><div><h2></h2></div><button type="button" class="kp-close" aria-label="关闭谜题">×</button></header><div class="kp-scroll"><p class="kp-intro"></p><div class="kp-content"></div><p class="kp-status" role="status" aria-live="polite"></p><div class="kp-hints"></div></div>', "<header class=\"kp-header\"><div><h2></h2></div><button type=\"button\" class=\"kp-close\" aria-label=\"謎を閉じる\">×</button></header><div class=\"kp-scroll\"><p class=\"kp-intro\"></p><div class=\"kp-content\"></div><p class=\"kp-status\" role=\"status\" aria-live=\"polite\"></p><div class=\"kp-hints\"></div></div>");
    root.querySelector("h2").textContent = title || event;
    container.append(root);
    const content = root.querySelector(".kp-content"),
      intro = root.querySelector(".kp-intro"),
      status = root.querySelector(".kp-status"),
      hintArea = root.querySelector(".kp-hints");
    const delay = (fn, ms) => {
      const t = setTimeout(() => {
        timers.delete(t);
        if (!disposed) fn();
      }, ms);
      timers.add(t);
      return t;
    };
    const action = (a) => {
      if (!disposed) options.onAction?.(a);
    };
    const ui = (name) => data.ui?.[name] || defaults.ui?.[name];
    const asset = (name) =>
      (data.assets?.[name] || defaults.assets?.[name])?.path;
    const soundPath = (name) => data.audio?.[name] || defaults.audio?.[name];
    function audio(name, start = 0, end = null, loop = false) {
      const p = soundPath(name);
      if (!p || disposed) return null;
      const a = new Audio(local(typeof p === "string" ? p : p.path));
      audios.add(a);
      a.muted = muted;
      a.volume = name === "BGM01" ? 0.1 : 0.65;
      a.loop = loop;
      const play = () => {
        if (disposed || a.__kpCancelled) return;
        a.currentTime = start;
        a.play().catch(() => {});
      };
      a.addEventListener("loadedmetadata", play, { once: true });
      if (a.readyState >= 1) play();
      if (end !== null)
        a.addEventListener("timeupdate", () => {
          if (a.currentTime >= end) a.pause();
        });
      return a;
    }
    function cue(id) {
      const c = SOURCE.se[id];
      if (c) audio("SE_all", c.start, c.end);
      action({ type: "component-sound", name: id });
    }
    function message(text, error = false) {
      status.textContent = text;
      status.classList.toggle("kp-error", error);
    }
    function record(id) {
      action({ type: "record", recordId: id });
    }
    function close() {
      cleanup();
      options.onClose?.();
    }
    function done(payload = {}) {
      if (solved || disposed) return;
      solved = true;
      root.classList.add("kp-complete");
      message(t("认证成功", "認証成功"));
      for (const x of root.querySelectorAll("button:not(.kp-close),input"))
        x.disabled = true;
      const p = ui("correct");
      if (p) {
        const im = image(p, t("原版认证成功", "認証成功"));
        im.className = "kp-correct-image";
        content.append(im);
      }
      options.onSolved?.(payload);
    }
    function image(path, alt = t("原版谜题图", "元の謎の画像")) {
      const im = document.createElement("img");
      im.src = local(path);
      im.alt = alt;
      im.draggable = false;
      return im;
    }
    function button(text, fn, cls = "") {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = text;
      b.className = cls;
      b.addEventListener("click", fn);
      return b;
    }
    function original(path, alt, zoom = true) {
      if (!path) return null;
      const im = image(path, alt);
      im.className = "kp-original";
      if (zoom) {
        const b = button("", () => enlarge(path, alt), "kp-art-button");
        b.append(im);
        b.setAttribute("aria-label", t("放大查看：", "拡大：") + alt);
        return b;
      }
      return im;
    }
    function enlarge(path, alt) {
      const overlay = document.createElement("div");
      overlay.className = "kp-enlarge";
      const b = button(t("关闭放大", "拡大を閉じる"), () => {
        overlay.remove();
        old?.focus();
      });
      const old = document.activeElement;
      overlay.append(b, image(path, alt));
      root.append(overlay);
      b.focus();
      overlay.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          overlay.remove();
          old?.focus();
        }
      });
    }
    function hints(items, anchor) {
      const d = document.createElement("details");
      d.className = "kp-help";
      const s = document.createElement("summary");
      s.textContent = t("提示（逐级展开，后级含答案）", "ヒント（順に開く・後半に答えあり）");
      d.append(s);
      for (const [label, text] of items) {
        const dd = document.createElement("details"),
          ss = document.createElement("summary"),
          p = document.createElement("p");
        ss.textContent = label;
        p.textContent = text;
        dd.append(ss, p);
        d.append(dd);
      }
      if (anchor) {
        const a = document.createElement("a");
        a.href = local("field-guide/index.html#" + anchor);
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = t("查看提示与册子", "冊子・ヒントを見る");
        d.append(a);
      }
      hintArea.append(d);
    }
    function question(n) {
      return (
        data.questions?.["question_" + n] ||
        defaults.questions?.["question_" + n]
      );
    }
    function answerForm(n, maxLength, onCorrect, failRecord, failCue) {
      const form = document.createElement("form");
      form.className = "kp-answer";
      const label = document.createElement("label"),
        input = document.createElement("input"),
        submit = document.createElement("button");
      input.maxLength = maxLength;
      input.autocomplete = "off";
      input.spellcheck = false;
      input.setAttribute("aria-label", t("输入日文口令", "パスワードを日本語で入力"));
      label.textContent = t("日文口令", "パスワード（日本語）");
      submit.type = "submit";
      submit.textContent = t("决定", "決定");
      label.append(input);
      form.append(label, submit);
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (solved) return;
        const q = question(n);
        if (q?.answer?.correct.includes(input.value)) {
          onCorrect();
        } else {
          input.value = "";
          message(
            q?.message?.warning || t("有些地方不对。", "なにかが違うようだ。"),
            true,
          );
          if (failRecord) record(failRecord);
          if (failCue) cue(failCue);
        }
      });
      content.append(form);
      return input;
    }
    function meshBoard(modelName, selected, onChange, onOk) {
      const model = SOURCE.models[modelName],
        wrap = document.createElement("div");
      wrap.className = "kp-mesh-wrap";
      wrap.innerHTML =
        t('<div class="kp-model-stage"><canvas tabindex="0" aria-label="拖动旋转原模型；点击字符切换。下方提供键盘选择。"></canvas></div><div class="kp-model-tools"></div><details class="kp-mesh-list"><summary>键盘选择</summary><div></div></details>', "<div class=\"kp-model-stage\"><canvas tabindex=\"0\" aria-label=\"ドラッグで回転、文字を押すと選択・解除。下の一覧からキーボードでも選べます。\"></canvas></div><div class=\"kp-model-tools\"></div><details class=\"kp-mesh-list\"><summary>キーボードで選択</summary><div></div></details>");
      content.append(wrap);
      const canvas = wrap.querySelector("canvas"),
        ctx = canvas.getContext("2d"),
        tools = wrap.querySelector(".kp-model-tools"),
        list = wrap.querySelector(".kp-mesh-list>div");
      let width = 0,
        height = 0,
        yaw = 0,
        pitch = 0.02,
        pointer = null,
        hits = [];
      const off = model.meshes.filter((m) => !m.name.endsWith("_on")),
        pts = off.flatMap((m) => m.vertices),
        mins = [0, 1, 2].map((k) => Math.min(...pts.map((p) => p[k]))),
        maxs = [0, 1, 2].map((k) => Math.max(...pts.map((p) => p[k]))),
        center = mins.map((v, k) => (v + maxs[k]) / 2),
        radius = Math.max(
          ...pts.map((p) => Math.hypot(...p.map((v, k) => v - center[k]))),
        );
      const imgs = new Map(),
        buttons = new Map();
      for (const m of model.meshes) {
        if (imgs.has(m.image)) continue;
        const im = new Image();
        im.onload = () => {
          if (!disposed) draw();
        };
        im.src = local("puzzle-assets/" + m.image);
        imgs.set(m.image, im);
        cleanups.push(() => (im.onload = null));
      }
      function chosen(m) {
        return selected.has(m.name.replace(modelName + "_", ""))
          ? model.meshes.find((n) => n.name === m.name + "_on") || m
          : m;
      }
      for (const m of off) {
        if (m.name === "ok") continue;
        const value = m.name.replace(modelName + "_", "");
        const b = button("", () => toggle(m));
        b.dataset.mesh = m.name;
        b.setAttribute(
          "aria-label",
          modelName === "bushu" ? t("原部首 ", "部首 ") + value : t("原字符 ", "文字 ") + value,
        );
        b.setAttribute("aria-pressed", String(selected.has(value)));
        b.append(image(local("puzzle-assets/" + m.image), value));
        if (modelName === "bushu") {
          const n = document.createElement("small");
          n.textContent = value;
          b.append(n);
        }
        list.append(b);
        buttons.set(value, b);
      }
      function toggle(m) {
        if (solved) return;
        if (m.name === "ok") {
          onOk?.();
          return;
        }
        const value = m.name.replace(modelName + "_", "");
        selected.has(value) ? selected.delete(value) : selected.add(value);
        onChange?.(selected);
        refresh();
        audio("SE_tap");
      }
      function refresh() {
        for (const [value, b] of buttons) {
          b.setAttribute("aria-pressed", String(selected.has(value)));
          const m = off.find((m) => m.name === modelName + "_" + value);
          b.querySelector("img").src = local(
            "puzzle-assets/" + chosen(m).image,
          );
        }
        draw();
      }
      function project(p) {
        const x = p[0] - center[0],
          y = p[1] - center[1],
          z = p[2] - center[2],
          xx = x * Math.cos(yaw) + z * Math.sin(yaw),
          zz = -x * Math.sin(yaw) + z * Math.cos(yaw),
          yy = y * Math.cos(pitch) - zz * Math.sin(pitch),
          depth = zz * Math.cos(pitch) + y * Math.sin(pitch),
          s = Math.min(width, height) / (radius * 2.35);
        return [width / 2 + xx * s, height / 2 - yy * s, depth];
      }
      function tri(p, uv, im) {
        const s = uv.map((v) => [v[0] * im.width, (1 - v[1]) * im.height]);
        const [x0, y0] = s[0],
          [x1, y1] = s[1],
          [x2, y2] = s[2],
          det = x0 * (y1 - y2) + x1 * (y2 - y0) + x2 * (y0 - y1);
        if (Math.abs(det) < 0.0001) return;
        const solve = (v) => [
          (v[0] * (y1 - y2) + v[1] * (y2 - y0) + v[2] * (y0 - y1)) / det,
          (v[0] * (x2 - x1) + v[1] * (x0 - x2) + v[2] * (x1 - x0)) / det,
          (v[0] * (x1 * y2 - x2 * y1) +
            v[1] * (x2 * y0 - x0 * y2) +
            v[2] * (x0 * y1 - x1 * y0)) /
            det,
        ];
        const a = solve(p.map((v) => v[0])),
          b = solve(p.map((v) => v[1]));
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p[0][0], p[0][1]);
        ctx.lineTo(p[1][0], p[1][1]);
        ctx.lineTo(p[2][0], p[2][1]);
        ctx.closePath();
        ctx.clip();
        ctx.transform(a[0], b[0], a[1], b[1], a[2], b[2]);
        ctx.drawImage(im, 0, 0);
        ctx.restore();
      }
      function draw() {
        if (disposed || !width) return;
        ctx.clearRect(0, 0, width, height);
        hits = [];
        const faces = off
          .map((original) => {
            const m = chosen(original),
              p = m.vertices.map(project);
            return {
              original,
              m,
              p,
              depth: p.reduce((a, v) => a + v[2] / p.length, 0),
            };
          })
          .sort((a, b) => a.depth - b.depth);
        for (const face of faces) {
          const { m, p } = face,
            im = imgs.get(m.image);
          if (!im?.complete || !im.naturalWidth) continue;
          for (let i = 0; i < m.indices.length; i += 3) {
            const ids = m.indices.slice(i, i + 3),
              ps = ids.map((k) => p[k]);
            tri(
              ps,
              ids.map((k) => m.uv[k]),
              im,
            );
            hits.push({ original: face.original, p: ps });
          }
        }
      }
      function resize() {
        const r = canvas.getBoundingClientRect(),
          dpr = Math.min(devicePixelRatio || 1, 2);
        width = r.width;
        height = r.height;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        draw();
      }
      const observer = new ResizeObserver(resize);
      observer.observe(canvas);
      cleanups.push(() => observer.disconnect());
      const point = (e) => {
        const r = canvas.getBoundingClientRect();
        return [e.clientX - r.left, e.clientY - r.top];
      };
      const inside = (p, t) => {
        const c = (a, b) =>
          (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
        const signs = [c(t[0], t[1]), c(t[1], t[2]), c(t[2], t[0])];
        return signs.every((x) => x >= 0) || signs.every((x) => x <= 0);
      };
      canvas.addEventListener("pointerdown", (e) => {
        if (e.button && e.pointerType === "mouse") return;
        pointer = {
          id: e.pointerId,
          start: point(e),
          last: point(e),
          drag: false,
        };
        canvas.setPointerCapture(e.pointerId);
        canvas.focus({ preventScroll: true });
      });
      canvas.addEventListener("pointermove", (e) => {
        if (!pointer || pointer.id !== e.pointerId) return;
        const p = point(e);
        if (Math.hypot(p[0] - pointer.start[0], p[1] - pointer.start[1]) > 6)
          pointer.drag = true;
        if (pointer.drag) {
          yaw += (p[0] - pointer.last[0]) * 0.012;
          pitch = Math.max(
            -0.65,
            Math.min(0.65, pitch + (p[1] - pointer.last[1]) * 0.006),
          );
          draw();
        }
        pointer.last = p;
      });
      canvas.addEventListener("pointerup", (e) => {
        if (!pointer || pointer.id !== e.pointerId) return;
        const drag = pointer.drag;
        pointer = null;
        if (!drag) {
          const p = point(e);
          for (let i = hits.length - 1; i >= 0; i--)
            if (inside(p, hits[i].p)) {
              toggle(hits[i].original);
              break;
            }
        }
      });
      canvas.addEventListener("pointercancel", () => (pointer = null));
      canvas.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          e.preventDefault();
          yaw += e.key === "ArrowLeft" ? -0.2 : 0.2;
          draw();
        }
      });
      tools.append(
        button(t("↶ 转向", "↶ 回転"), () => {
          yaw -= 0.35;
          draw();
        }),
        button(t("复位视角", "視点を戻す"), () => {
          yaw = 0;
          pitch = 0.02;
          draw();
        }),
        button(t("转向 ↷", "回転 ↷"), () => {
          yaw += 0.35;
          draw();
        }),
      );
      delay(resize, 0);
      return { refresh, wrap };
    }
    function pairMemory() {
      intro.textContent =
        t("每次选两张能拼合的图。点拼好的图可放大。", "組み合う画像を2枚ずつ選んでください。完成した画像はタップで拡大できます。");
      const saved = retained.get("pair:" + sid) || { selected: [], pairs: [] },
        selected = new Set(saved.selected),
        pairs = new Set(saved.pairs);
      const board = document.createElement("div");
      board.className = "kp-pair-board";
      content.append(board);
      const pairDefs = [
        [1, 2, "nazo2_2"],
        [3, 4, "nazo2_1"],
        [5, 6, "nazo2_3"],
      ];
      function save() {
        retained.set("pair:" + sid, {
          selected: [...selected],
          pairs: [...pairs],
        });
      }
      function render() {
        board.replaceChildren();
        for (const [a, b, name] of pairDefs) {
          if (pairs.has(name)) {
            const fig = document.createElement("figure");
            fig.append(original(asset(name), t("组合后的原题图", "組み合わせた謎の画像")));
            board.append(fig);
            continue;
          }
          for (const n of [a, b]) {
            const on = selected.has(n),
              b = button("", () => {
                selected.has(n) ? selected.delete(n) : selected.add(n);
                audio("SE_tap");
                for (const [x, y, key] of pairDefs)
                  if (
                    selected.size === 2 &&
                    selected.has(x) &&
                    selected.has(y)
                  ) {
                    pairs.add(key);
                    selected.clear();
                    action({ type: "pair", pair: [x, y], assetName: key });
                  }
                save();
                render();
              });
            b.dataset.card = n;
            b.setAttribute("aria-label", t("原图 ", "画像 ") + n);
            b.setAttribute("aria-pressed", String(on));
            b.append(
              image(asset("nazo_" + n + (on ? "_on" : "")), t("原图 ", "画像 ") + n),
            );
            board.append(b);
          }
        }
        message(t("已组合 ", "組み合わせ済み ") + pairs.size + t(" / 3 对", " / 3組"));
      }
      render();
      content.append(
        button(t("返回口令输入", "パスワード入力に戻る"), close, "kp-primary"),
        button(t("重新组合", "組み合わせをやり直す"), () => {
          selected.clear();
          pairs.clear();
          save();
          render();
        }),
      );
      hints(
        [
          [
            t("提示 1", "ヒント1"),
            t("放大题图仔细观察。每次只选择两张图，选中的图会高亮。", "画像を拡大してよく見てください。一度に選ぶのは2枚だけです。選んだ画像が明るくなります。"),
          ],
          [
            t("提示 2（含配对）", "ヒント2（組み合わせの答え）"),
            t("将第1、2张，第3、4张，第5、6张配对，得到三张组合题，再解出最终口令。", "1枚目と2枚目、3枚目と4枚目、5枚目と6枚目を組み合わせます。できた3枚の謎を解き、最後のパスワードを導いてください。"),
          ],
        ],
        "1-2",
      );
    }
    function deletion() {
      const isNoise = event === "delete-noise",
        isHowling = event === "delete-howling",
        target = String(
          question(isNoise ? 1 : isHowling ? 3 : 1).answer.correct[0],
        ),
        selected = new Set();
      let activeDelete = false;
      intro.textContent =
        t("启用 DELETE，转动视角并选择要删除的字符。再次点击字符可取消；必须完整匹配，顺序不限。", "DELETEをONにし、視点を回して消す文字を選んでください。もう一度押すと解除できます。必要な文字をすべて選びます。順番は問いません。");
      const note = ui(isNoise ? "noize_note" : isHowling ? "howling_note" : "");
      if (note) content.append(original(note, t("原 DELETE 操作提示", "DELETEの操作説明")));
      const start = button(
        "DELETE OFF",
        () => {
          activeDelete = true;
          start.textContent = "DELETE ON";
          start.disabled = true;
          panel.hidden = false;
          action({ type: "delete-mode", active: true });
          audio("SE_tap");
        },
        "kp-delete-toggle",
      );
      content.append(start);
      const panel = document.createElement("div");
      panel.className = "kp-delete-panel";
      panel.hidden = true;
      content.append(panel);
      const oldContent = content;
      const board = meshBoard("delete", selected, () =>
        message(t("已选择 ", "選択中 ") + selected.size + t(" 个字符", "文字")),
      );
      panel.append(board.wrap);
      const submit = button(
        t("确定删除选择", "選んだ文字をDELETE"),
        () => {
          if (!activeDelete || solved) return;
          const sub =
            selected.size === 3 &&
            ["オ", "カ", "ベ"].every((x) => selected.has(x));
          if (event === "delete-okabe" && sub) {
            message(t("请选择 8 个字符。", "8文字で入力せよ。"), true);
            return;
          }
          if (
            selected.size === target.length &&
            [...selected].every((v) => target.includes(v))
          ) {
            panel.hidden = true;
            start.hidden = true;
            message(t("DELETE 选择正确，请阅读原题图并输入口令。", "DELETE成功。現れた謎を読み、パスワードを入力してください。"));
            action({
              type: "delete-selection",
              target,
              selected: [...selected],
            });
            showQuestion();
          } else {
            const okabe =
              selected.size === 8 &&
              [..."オカベリンタロウ"].every((v) => selected.has(v));
            selected.clear();
            board.refresh();
            message(
              sub || okabe
                ? "なっ…！？相棒、血迷ったか！？真面目に解くんだっ！"
                : t("选错了。已清除本次选择。", "なにかが違うようだ。選択をリセットした。"),
              true,
            );
            record(
              isNoise
                ? "AR1_3_79_FAI"
                : isHowling
                  ? "AR1_3_84_FAI"
                  : "AR3_3_28_FAI",
            );
            cue(isNoise || isHowling ? "SE1_3_79_FAI" : "SE3_3_28_FAI");
          }
        },
        "kp-primary",
      );
      panel.append(submit);
      function showQuestion() {
        const key = isNoise
            ? "nazo_noise"
            : isHowling
              ? "nazo_howling"
              : "nazo",
          path = ui(key),
          n = isNoise ? 2 : isHowling ? 4 : 2;
        if (isHowling) {
          const stage = document.createElement("div");
          stage.className = "kp-ring-stage";
          stage.append(image(path, t("原ハウリング消失ワード题图", "ハウリング消失ワードの謎")));
          const ring = button("", () => {}, "kp-ring");
          ring.setAttribute("aria-label", t("可拖动的原戒指，方向键移动", "指輪。ドラッグまたは矢印キーで移動"));
          ring.append(image(ui("ring"), t("原戒指", "指輪")));
          stage.append(ring);
          content.append(stage);
          let x = 76,
            y = 66,
            drag = null;
          const place = () => {
            ring.style.left = x + "%";
            ring.style.top = y + "%";
          };
          place();
          ring.addEventListener("pointerdown", (e) => {
            const b = stage.getBoundingClientRect();
            drag = {
              id: e.pointerId,
              dx: e.clientX - b.x - (x / 100) * b.width,
              dy: e.clientY - b.y - (y / 100) * b.height,
            };
            ring.setPointerCapture(e.pointerId);
            e.preventDefault();
          });
          ring.addEventListener("pointermove", (e) => {
            if (!drag || drag.id !== e.pointerId) return;
            const b = stage.getBoundingClientRect();
            x = Math.max(
              0,
              Math.min(82, ((e.clientX - b.x - drag.dx) / b.width) * 100),
            );
            y = Math.max(
              0,
              Math.min(76, ((e.clientY - b.y - drag.dy) / b.height) * 100),
            );
            place();
          });
          ring.addEventListener("pointerup", () => (drag = null));
          ring.addEventListener("pointercancel", () => (drag = null));
          ring.addEventListener("keydown", (e) => {
            if (!e.key.startsWith("Arrow")) return;
            e.preventDefault();
            x = Math.max(
              0,
              Math.min(
                82,
                x +
                  (e.key === "ArrowLeft" ? -2 : e.key === "ArrowRight" ? 2 : 0),
              ),
            );
            y = Math.max(
              0,
              Math.min(
                76,
                y + (e.key === "ArrowUp" ? -2 : e.key === "ArrowDown" ? 2 : 0),
              ),
            );
            place();
          });
        } else content.append(original(path, t("DELETE 后显现的原题图", "DELETE後に現れた謎")));
        answerForm(
          n,
          isNoise ? 3 : isHowling ? 4 : 3,
          () => {
            if (event === "delete-okabe") cue("SE3_3_30");
            done({
              target: isNoise ? "AR1_3_81" : isHowling ? "AR1_3_86" : "82ezfsx",
              payload: { selected: [...selected] },
            });
          },
          isNoise
            ? "AR1_3_81_FAI"
            : isHowling
              ? "AR1_3_85_FAI"
              : "AR3_3_29_FAI",
          isNoise || isHowling ? "SE1_3_79_FAI" : "SE3_3_29_FAI",
        );
      }
      hints(
        [
          [
            t("提示 1", "ヒント1"),
            t("转动视角寻找字符，或展开键盘选择。题图可点击放大。", "視点を回して文字を探すか、キーボード用の一覧を開いてください。謎の画像は押すと拡大できます。"),
          ],
          [
            t("提示 2（含删除目标）", "ヒント2（消す文字の答え）"),
            t("本轮完整删除目标：", "今回消す文字：") + target + t("。顺序不限。", "。順不同です。"),
          ],
          [
            t("提示 3（含原口令）", "ヒント3（パスワードの答え）"),
            t("口令：", "DELETE後の謎で入力できる答え：") +
              question(isNoise ? 2 : isHowling ? 4 : 2).answer.correct.join(
                " / ",
              ) +
              "。" +
              (isHowling
                ? t("拖动戒指，对照图示读字。", "指輪を動かし、図に合わせて文字を読んでください。")
                : ""),
          ],
        ],
        isNoise || isHowling ? "1-3" : "3-3",
      );
    }
    function gearMemory() {
      intro.textContent =
        t("齿轮每 11 秒转一圈。播放铃声并观察齿轮，读出四字口令。", "歯車は11秒で1周します。鈴の音を再生し、歯車を見ながら4文字のパスワードを読み取ってください。");
      const stage = document.createElement("div");
      stage.className = "kp-gear-stage";
      const gear = image(ui("gear"), t("原旋转齿轮", "回転する歯車"));
      stage.append(gear);
      content.append(stage, original(ui("nazo_kioku"), t("原齿轮与铃声谜题说明", "歯車と鈴の音の謎の説明")));
      let raf = 0,
        epoch = 0,
        elapsed = 0,
        track = null,
        running = false;
      function frame(now) {
        if (!running || disposed) return;
        elapsed = (now - epoch) / 1000;
        const phase = elapsed % 11;
        gear.style.transform =
          "translateX(-50%) rotate(" + (phase / 11) * 360 + "deg)";
        if (track && phase < 0.05 && track.currentTime > 10)
          track.currentTime = 0;
        raf = requestAnimationFrame(frame);
      }
      function stop() {
        running = false;
        cancelAnimationFrame(raf);
        if (track) {
          track.__kpCancelled = true;
          track.pause();
        }
      }
      function play() {
        stop();
        track = audio("SE_suzu");
        const begin = () => {
          if (disposed) return;
          epoch = performance.now();
          elapsed = 0;
          running = true;
          gear.style.transform = "translateX(-50%) rotate(0deg)";
          raf = requestAnimationFrame(frame);
        };
        if (track) track.addEventListener("playing", begin, { once: true });
        else begin();
        message(
          muted
            ? t("当前已静音，可取消主界面静音后重新打开，或使用辅助提示。", "現在は消音中です。元の画面で音声をONにして開き直すか、ヒントを確認してください。")
            : t("铃声播放中", "鈴の音を再生中"),
        );
      }
      content.append(
        button(t("播放铃声 / 从头同步", "鈴の音を再生 / 最初から同期"), play, "kp-primary"),
        button(t("暂停观察", "一時停止"), stop),
      );
      cleanups.push(stop);
      const visibility = () => {
        if (document.hidden) stop();
      };
      document.addEventListener("visibilitychange", visibility);
      cleanups.push(() =>
        document.removeEventListener("visibilitychange", visibility),
      );
      answerForm(
        5,
        4,
        () => {
          cue("SE1_3_88_CORa");
          done({ target: "fjalg332" });
        },
        "AR1_3_87_FAI",
        "SE1_3_79_FAI",
      );
      hints(
        [
          [
            t("提示 1", "ヒント1"),
            t("在铃声中①②③④的时机读取齿轮字符。可重新同步，也可暂停观察。", "鈴の音の①②③④のタイミングで歯車の文字を読んでください。最初から同期し直すことも、一時停止することもできます。"),
          ],
          [
            t("提示 2（含答案）", "ヒント2（答え）"),
            t("口令：", "入力できる答え：") +
              question(5).answer.correct.join(" / ") +
              "。",
          ],
        ],
        "1-3",
      );
    }
    function ex1() {
      intro.textContent =
        t("左右两半线索可以分次取得，关闭后仍会保留。", "左右の手掛かりは別々に入手でき、閉じても保存されます。");
      const key = "ex1:" + sid,
        state = data.inventory
          ? {
              left: !!data.inventory["bkucguk:left"],
              right: !!data.inventory["bkucguk:right"],
            }
          : retained.get(key) || { left: false, right: false },
        selected = new Set();
      retained.set(key, state);
      const board = meshBoard(
        "bushu",
        selected,
        () => message(t("已选 ", "選択中 ") + selected.size + t(" 个部首", "個の部首")),
        check,
      );
      const submit = button(t("确定部首", "部首を決定"), check, "kp-primary");
      content.append(submit);
      const clues = document.createElement("div");
      clues.className = "kp-ex-clues";
      content.append(clues);
      const next = button(
        japanese ? "EX2へ · 最後のパスワードを入力" : "前往 EX2 · 输入最终口令",
        () => done({ target: "sad97sf", payload: { left: true, right: true } }),
        "kp-primary",
      );
      next.hidden = true;
      content.append(next);
      function reveal() {
        clues.replaceChildren();
        if (state.left) clues.append(original(ui("left"), t("原左半线索", "左半分の手掛かり")));
        if (state.right) clues.append(original(ui("right"), t("原右半线索", "右半分の手掛かり")));
        next.hidden = !(state.left && state.right);
        if (state.left && state.right) {
          message(japanese
            ? "両方の手掛かりを見て、冊子3/3の空欄を埋めてください。"
            : "对照两半线索填写册子 3/3 的空栏。");
          submit.disabled = true;
          action({ type: "ex1-half", left: true, right: true });
        }
      }
      function check() {
        const oldLeft = state.left,
          oldRight = state.right;
        if (["17", "18", "9", "5"].every((n) => selected.has(n)))
          state.left = true;
        if (["1", "13", "10"].every((n) => selected.has(n))) state.right = true;
        const gained = state.left !== oldLeft || state.right !== oldRight;
        if (state.left && state.right) {
          audio("SE_all", 4, 5);
          delay(() => audio("SE_all", 6, 7), 1000);
          reveal();
        } else {
          selected.clear();
          board.refresh();
          if (gained) {
            audio("SE_all", 4, 5);
            message(t("2/3 的线索已取得一半，再对照原纸本取得另一半。", "2/3の手掛かりを半分入手しました。冊子を確認し、もう半分も入手してください。"));
            delay(() => audio("SE_all", 6, 7), 1000);
          } else {
            audio("SE_all", 1, 2);
            message(t("选错了。已清除本次选择。", "なにかが違うようだ。選択をリセットした。"), true);
          }
          reveal();
          action({ type: "ex1-half", left: state.left, right: state.right });
        }
        retained.set(key, state);
      }
      reveal();
      hints(
        [
          [
            t("提示 1", "ヒント1"),
            t("按照「记忆数据Ⅵ密码2/3」给出的读音，找出可组成相应汉字的部首。可转动视角，或展开键盘选择查看部首编号。", "「記憶データⅥパスワード2/3」の読みから、漢字を組み立てる部首を探してください。視点を回すか、キーボード用の一覧を開くと部首の番号を確認できます。"),
          ],
          [
            t("提示 2（含部首集合）", "ヒント2（部首の組み合わせ）"),
            t("左半选择编号17、18、9、5；右半选择1、13、10。选择包含这组编号即可取得对应线索，额外选择不影响结果。", "左半分は17・18・9・5、右半分は1・13・10を選びます。該当する番号がすべて含まれていれば、ほかの部首を選んでいても手掛かりを入手できます。"),
          ],
          [
            t("提示 3（纸本关联）", "ヒント3（冊子との組み合わせ）"),
            t("两种读音是「みずうみ」「さむらい」。将两半线索与册子3/3合读，求出最终汉字口令。", "読みは「みずうみ」と「さむらい」です。左右の手掛かりを冊子3/3と照らし合わせ、最後の漢字パスワードを導いてください。"),
          ],
        ],
        "3-1",
      );
    }
    function ex2() {
      intro.textContent =
        t("对照 EX1 的两半线索和册子上的 3/3，输入两个汉字。", "漢字2文字の記憶データⅥパスワードを入力せよ。EX1で入手した左右の手掛かりを冊子3/3と照らし合わせてください。");
      audio("SE_all", 9, 10);
      const prior = SOURCE.scenes.bkucguk;
      const clues = document.createElement("details");
      clues.innerHTML = t("<summary>EX1 已取得的线索</summary>", "<summary>EX1で入手した手掛かりを見る</summary>");
      const saved = data.inventory
        ? {
            left: !!data.inventory["bkucguk:left"],
            right: !!data.inventory["bkucguk:right"],
          }
        : retained.get("ex1:bkucguk");
      if (saved?.left) clues.append(original(prior.ui.left, t("原左半线索", "左半分の手掛かり")));
      if (saved?.right) clues.append(original(prior.ui.right, t("原右半线索", "右半分の手掛かり")));
      if (!saved?.left && !saved?.right) {
        const p = document.createElement("p");
        p.textContent =
          t("尚未取得 EX1 的线索。可返回 EX1，或展开下方答案。", "EX1の手掛かりはまだ入手していません。EX1に戻るか、必要に応じて下の答えを確認してください。");
        clues.append(p);
      }
      content.append(clues);
      answerForm(
        1,
        6,
        () => {
          audio("SE_all", 4, 5);
          done({ target: "74ngv74" });
        },
        null,
        null,
      );
      const form = content.querySelector("form");
      form.addEventListener("submit", () => {
        if (!solved) audio("SE_all", 1, 2);
      });
      hints(
        [
          [
            t("口令答案", "パスワードの答え"),
            t("汉字口令：", "漢字のパスワード：") +
              question(1).answer.correct.join(" / ") +
              "。",
          ],
        ],
        "3-1",
      );
    }
    function endingSwitch() {
      intro.hidden = true;
      const b = button(
        "",
        () => {
          if (solved) return;
          b.disabled = true;
          b.classList.add("kp-switch-pressed");
          action({
            type: "switch",
            index: data.switchIndex || 0,
            animation: "SwitchAction",
          });
          let frame = 0;
          const advance = () => {
            if (disposed) return;
            frame++;
            if (frame < 20) {
              im.src = local(
                "puzzle-assets/switch-" +
                  String(frame).padStart(2, "0") +
                  ".png",
              );
              delay(advance, 100);
            } else im.src = local("puzzle-assets/switch-00.png");
          };
          advance();
          done({
            payload: {
              switchIndex: data.switchIndex || 0,
              animation: "SwitchAction",
            },
          });
        },
        "kp-switch",
      );
      b.setAttribute("aria-label", t("触碰原世界线变动开关", "世界線変動スイッチに触れる"));
      const im = image("puzzle-assets/switch-00.png", t("世界线变动开关", "世界線変動スイッチ"));
      b.append(im);
      content.append(b);

    }
    root.querySelector(".kp-close").onclick = close;
    root.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
      if (e.key === "Tab") {
        const f = [
            ...root.querySelectorAll(
              "button:not(:disabled),input:not(:disabled),summary,a,canvas[tabindex]",
            ),
          ].filter((x) => x.getClientRects().length),
          i = f.indexOf(document.activeElement);
        if (
          f.length &&
          ((e.shiftKey && i <= 0) ||
            (!e.shiftKey && (i === f.length - 1 || i < 0)))
        ) {
          e.preventDefault();
          f[e.shiftKey ? f.length - 1 : 0].focus();
        }
      }
    });
    function cleanup() {
      if (disposed) return;
      disposed = true;
      for (const t of timers) clearTimeout(t);
      for (const a of audios) {
        a.pause();
        a.removeAttribute("src");
        a.load();
      }
      for (const fn of cleanups) fn();
      root.remove();
      if (active === cleanup) {
        active = null;
        muteActive = null;
      }
      if (oldFocus?.isConnected) oldFocus.focus({ preventScroll: true });
    }
    active = cleanup;
    muteActive = (value) => {
      muted = !!value;
      for (const a of audios) a.muted = muted;
    };
    try {
      if (event === "pair-memory") pairMemory();
      else if (event.startsWith("delete-")) deletion();
      else if (event === "gear-memory") gearMemory();
      else if (event === "ex1") ex1();
      else if (event === "ex2") ex2();
      else if (event === "ending-switch") endingSwitch();
      else {
        intro.hidden = true;
        message(t("无法打开谜题。", "謎を開けませんでした。"), true);
      }
    } catch (error) {
      cleanup();
      throw error;
    }
    root.querySelector(".kp-close").focus({ preventScroll: true });
    return cleanup;
  }
  window.KarkinosPuzzles = Object.freeze({
    open,
    setMuted(value) {
      muteActive?.(value);
    },
    reset(sceneId) {
      if (!sceneId) retained.clear();
      else
        for (const key of retained.keys())
          if (key.endsWith(":" + sceneId)) retained.delete(key);
    },
  });
})();
