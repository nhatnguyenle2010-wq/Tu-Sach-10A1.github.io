
const PAGES = [
  // ===== BÌA TRƯỚC =====
  {
    type: "cover",
    imageId: "cover-front",  
    position: "front"
  },
  
  // ===== CHƯƠNG 1 =====
  {
    type: "story",
    imageId: "chapter-1",
    label: "Chương 1",
    
    pg: 1,
    text: `Năm ấy tôi mười bảy tuổi, binh nhì, chiến sĩ của tiểu đoàn 5 tân binh. Tiểu đoàn chúng tôi luyện quân ở Bãi Nai. Bấy giờ đã là vào cuối khoá huấn luyện ba tháng, kiểm tra xạ kích, đạt điểm cao nhất đại đội, tôi được thưởng hai ngày phép. Đại đội trưởng linh động cho tôi miễn bình tuần tối thứ Sáu. “Đã được lãi một tối càng phải liệu mà về cho khuýp giờ điểm danh đấy nhá”. Anh dặn tôi thế, ra ý đe.`,
  },
  
  // ===== CHƯƠNG 2 =====
  {
    type: "story",
    imageId: "chapter-2",
    label: "Chương 2",
   
    pg: 2,
    text: `Chuyến về nhờ bám được xe quân sự chạy trên đường 6 nên phi cái vù đã tới nhà. Chuyến trở lại phải chen xe khách. Chín giờ tối Chủ nhật mới điểm danh mà chỉ dám nấn ná cố cùng tới 12 giờ trưa là phải bứt khỏi nhà chạy nhào ra bến Kim Mã. Chen lên được một chuyến xe vào thời buổi gian khó ấy khổ sở đến thế nào khỏi bàn. Thêm nữa lại ngày giáp Tết. Do may mắn và cũng là do ẩu tả ngồi lèn nhau trên nóc xe nên đến nhập nhoạng tối thì tôi nhảy được xuống thị trấn Lương Sơn. Đói mèm, rét run, lại lớ quớ trượt chân ngã, tuột tung quai dép và lấm be bét.`,
  },
  
  // ===== CHƯƠNG 3 =====
  {
    type: "story",
    imageId: "chapter-3",
    label: "Chương 3",
    head: "Tiêu đề Chương 3",
    pg: 3,
    text: `Trật trưỡng tôi dò tới cái giếng xây ở đầu trấn để rửa ráy qua loa tí chút và xâu lại dép. Chỉ có một người đang múc nước ở giếng. Trời mưa nhưng rất mỏng, như sương, và chưa tối hẳn nên từ khá xa tôi đã nhận ra một cái dáng con gái. Khi tôi tới bên giếng, hai thùng
lớn của gánh nước đã được đổ đầy, cô
gái cuộn dây gâu, tra đòn gánh vào hai
móc xích, và trước khi lên gánh, cô đội
lại chiếc nón mà lúc cúi múc nước cô đã
bỏ ra để ngửa bên thành giếng. Với con
mắt lính 17 tuổi nhanh như chớp, tôi
lườm ngay thấy tên cô nàng viết bằng
mực tím ở trong vành nón, cả tên, cả họ,
cả đệm, và cả lớp học của cô nữa. Phạm
Nhật Giang 10B.`,
  },
  
  // ===== CHƯƠNG 4 =====
  {
    type: "story",
    imageId: "chapter-4",
    label: "Chương 4",
    head: "Tiêu đề Chương 4",
    pg: 4,
    text: `Không để ý đến tôi, cô đặt gánh lên vai.
Tôi nói, vội vã, nhưng thản nhiên, như thật.
\n\n- Kìa, Giang. Cho anh mượn cái gầu đã nào.
\n\n  Cô gái hạ gánh, nhìn tôi.
\n\n- Chào anh, anh bộ đội... - Cô nói, ngập ngừng, nhưng có lẽ chưa kịp ngạc nhiên
\n\n  Gầu đây anh.
\n\n  Tôi xoè hai bàn tay bê bết bùn ra.
\n\n- Ôi anh bị lấm hết rồi. - Cô gái khẽ thốt lên
\n\n- Thôi, để em.
\n\n- Ừ. Nhờ Giang vậy, chứ không thì bẩn hết cả dây. ` ,
  },
  
  // ===== CHƯƠNG 5 =====
  {
    type: "story",
    imageId: "chapter-5",
    label: "Chương 5",
    head: "Tiêu đề Chương 5",
    pg: 5,
    text: `Cô gái múc lên một gầu, hai gầu, xối từ từ cho tôi rửa kĩ hai bàn tay. Khi tôi định đón lấy chiếc gầu, cô bảo:
\n\n- Cái gầu này khó múc lắm. Để em giúp anh.
\n\n Cô lại thòng nhanh sợi chão xuống bóng tối sâu hút bên dưới rồi thoăn thoắt, mềm mại, kéo gầu nước lên. Nhưng sự ân cần của cô còn hơn thế. Mỗi gầu nước múc lên cô không xối cho tôi tự gột mà cúi mình xuống, một tay nghiêng gầu nước dội nhè nhẹ, một tay cô cọ bùn đất ở bàn chân, ngón chân, bắp chân tôi. Ngây ra, tôi đứng yên, sững lặng cảm nhận cái ân tình hồn nhiên và bất ngờ ấy. Rất lâu, hai đứa chẳng nói gì, cô gái lặng lẽ gột rửa cho tôi, tôi thì bất động. Cô cọ kĩ cho tôi cả đôi dép đúc.`,
  },
  
  {
    type: "story",
    imageId: "chapter-6",
    label: "Chương 6",
    head: "Tiêu đề Chương 6",
    pg: 6,
    text: `\n\n- Tươm rồi đấy, anh - Cô gái nói trong bóng tối.
\n\n- Cám ơn nhé, Nhật Giang!
\n\nCô gái trở lại với nỗi ngạc nhiên:
\n\n- Ô kìa. Ừ nhỉ, sao anh biết tên em?
\n\nTôi cười, không đáp.
\n\n- À, em biết rồi. Anh toạ độ chứ gì mà. Các anh bộ đội chuyên thế. Cứ gọi: Lan, Hằng, Liên, Oanh thế nào cũng trúng, chứ gì?
\n\n- Nhưng Giang, lại Nhật Giang nữa, chắc không có hai người tên như thế đâu, đoán mò sao được.`,
  },

  {
    type: "story",
    imageId: "chapter-7",
    label: "Chương 7",
    head: "Tiêu đề Chương 7",
    pg: 7,
    text: `\n\n- Chắc anh đóng ở gần đây.
\n\n- Chả gần lắm, tận xóm Đượm.
\n\n- Bao xa anh?
\n\n- Giang không phải người đây à?
\n\n- Vâng, em mới Hà Nội lên - Giang đáp, và chợt cô rủ tôi:
\n\n- Nhà em đang trọ ở ngay kia, anh vào nghỉ một lát.
\n\n Tôi do dự:
\n\n- Chín giờ, đơn vị điểm danh rồi... mà còn non chục cây.
\n\n- Còn sớm, mới sáu giờ kém mà, anh.`,
  },

    {
    type: "story",
    imageId: "chapter-8",
    label: "Chương 8",
    head: "Tiêu đề Chương 8",
    pg: 8,
    text: ` Tôi muốn hộ Giang gánh nước, nhưng cô không chịu. Tôi theo sau cô vào sâu một cái ngõ tối. Một mình Giang một túp nhà nhỏ, mái gianh vách đất. Không có đồ đạc gì. Một chiếc giường đơn, một ngọn đèn hoa kì trên chiếc chõng tre, bộ ấm tích, điếu bát. Một chiếc xe đạp Phượng Hoàng dựng ở gần cửa.`,
  },

    {
    type: "story",
    imageId: "chapter-9",
    label: "Chương 9",
    head: "Tiêu đề Chương 9",
    pg: 9,
    text: `Tôi mở túi phòng hoá đeo bên hông lấy gói bít cốt mẹ dúi cho hồi trưa, và rót chè tươi trong ấm tích ra bát. Bít cốt chiêu với chè tươi, định thế. Thấy vậy, đang lúi húi xâu lại quai dép cho tôi, Giang vội kêu lên:
\n\n- Ôi em quên. Có cơm mà, để em dọn mời anh.
\n\nTôi gạt đi, nhưng Giang nài tôi chịu khó chờ cô xuống bếp hâm lại cơm canh mà ăn uống cho chắc dạ và nóng sốt.`,
  },

    {
    type: "story",
    imageId: "chapter-10",
    label: "Chương 10",
    head: "Tiêu đề Chương 10",
    pg: 10,
    text: `Trong lúc chờ Giang, tôi ngả phứa ra giường cô [...]. Chợt cửa ra vào mở.
Một người đàn ông cao lớn bước mạnh vào. Tôi giật bắn mình, bật chồm dậy. Ông nọ vận đại cán vải dạ xanh sẫm, giầy da Cô-xư-ghin, quân hàm ve áo hai sao hai vạch.
\n\n- Cậu là ai? Đâu chui vào đây ?-
Nghiêm sắc mặt, ông trung tá hỏi, chằm chằm nhìn.
\n\nTôi dập gót:
\n\n- Báo cáo, tôi...`,
  },

    {
    type: "story",
    imageId: "chapter-11",
    label: "Chương 11",
    head: "Tiêu đề Chương 11",
    pg: 11,
    text: `Vừa khi đó Giang bưng mâm cơm đi từ sân sau vào.
\n\n- Bố về rồi đấy ạ - Cô vội vã nói 
\n\n- Bố ơi, đây là Hùng, bạn học lớp 10 với con. Anh ấy đóng quân gần đây. Chúng con tình cờ gặp nhau vừa nãy.
\n\nÔng trung tá dịu nét mặt, nhưng giọng vẫn
nghiêm:
\n\n- Đóng gần đây à? Đồng chí đơn vị nào?
\n\n- Báo cáo thủ trưởng, tôi ở C7 K5 đoàn 91.
\n\n- Thế đồng chí đi đâu, sao giờ này còn tụt tạt ngoài đây?
\n\n- Báo cáo thủ trưởng, tôi về phép lên. Đơn vị chín giờ mới điểm danh.
\n\n- Thế đồng chí định để đúng điểm danh mới có mặt à? Phải về đơn vị sớm hơn chứ.`,
  },

    {
    type: "story",
    imageId: "chapter-12",
    label: "Chương 12",
    head: "Tiêu đề Chương 12",
    pg: 12,
    text: `\n\n- Kìa bố - Giang kêu lên 
    \n\n- Bố để cho anh ấy ăn cơm đã. Bố cũng ăn luôn với bọn con đi.
\n\n- Không đâu, tớ không ăn đâu! - Tôi hoảng lên - Tớ phải chào đây, Giang!
\n\nÔng bố Giang mỉm cười, vỗ nhẹ vai tôi, bảo:
\n\n- Từ đây về xóm Đượm sáu cây, còn kịp. Cậu ăn cơm đi, ngồi chơi với Giang. Bạn học lâu ngày gặp nhau. Nhưng rồi phải rảo chân lên. Vẫn phải về kịp trước điểm danh, rõ chưa!
\n\n- Thì bố xin hộ cho anh ấy, bố! - Giang nói, nũng nịu - Bố gọi cho cấp chỉ huy của anh ấy. Chúng con học cùng từng ấy năm, gặp nhau chuyện tới khuya chẳng hết.`,
  },

    {
    type: "story",
    imageId: "chapter-13",
    label: "Chương 13",
    head: "Tiêu đề Chương 13",
    pg: 13,
    text: `\n\n- Không được, - Ông bố cười, lắc đầu 
    \n\n-Bạn hữu gặp gỡ thế này là quý, nhưng con không có được những nhẵng con cà con kê giữ bạn lại quá lâu. Đừng có để bạn phạm kỉ luật.
\n\nÔng nhìn đồng hồ.
\n\n- Sáu rưỡi rồi- Ông nói 
\n\n- Hai đứa khẩn trương cơm nước đi. Tối nay bố không ăn với con được. Bố phải qua đơn vị. Phải họp khuya đấy. Con một mình ở nhà cửa giả cho cẩn thận.
\n\nÔng bước tới bên cửa, cầm lấy ghi đông chiếc xe đạp, và nhìn tôi, ông nói: 
\n\nHùng ngồi chơi nhá. Nhưng nhớ giờ giấc đấy.`,
  },

    {
    type: "story",
    imageId: "chapter-14",
    label: "Chương 14",
    head: "Tiêu đề Chương 14",
    pg: 14,
    text: `\n\n- Kìa bố, bố lấy xe đạp ạ! - Giang kêu lên - Con định đưa anh ấy về đơn vị cơ mà, bố! Bố chịu khó đi bộ, bố nhá. Chỗ bố gần ngay đây mà.
\n\n- Không! Đừng mà... - Tôi hãi quá
\n\n- Giang đừng vậy ...`,
  },

    {
    type: "story",
    imageId: "chapter-15",
    label: "Chương 15",
    head: "Tiêu đề Chương 15",
    pg: 15,
    text: `Ông trung tá cười, bảo:
\n\n- Con gái con lứa thế đấy. Chiều bạn hơn bố. Nhưng bố nhất trí, bố để xe cho hai đứa. Chứ mà cuốc bộ thì con làm Hùng chậm giờ mất. Có điều đường đồi ban đêm hai đứa lai nhau cho cẩn thận, đừng có phóng nhanh kẻo ngã. Đưa Hùng tới đơn vị rồi lúc quay về một mình con cứ đạp từ từ, nhìn đường. Nhưng cũng gắng đừng có thong dong quá đấy. Trời lạnh thế này. Với lại con về khuya bố không yên tâm đâu.`,
  },

    {
    type: "story",
    imageId: "chapter-16",
    label: "Chương 16",
    head: "Tiêu đề Chương 16",
    pg: 16,
    text: `Tối ấy, tôi lai Giang vào sâu trong Bãi Nai. Đồng rừng tối câm, lạnh lẽo. Con đường đồi quạnh vắng, không ngừng uốn lượn và gấp khúc. Gió bấc lúc thuận lúc ngược, nhưng mà tôi không thấy mệt, tôi đạp mải miết.`,
  },

    {
    type: "story",
    imageId: "chapter-17",
    label: "Chương 17",
    head: "Tiêu đề Chương 17",
    pg: 17,
    text: `Tôi chưa khi nào đèo con gái. Cả hồi năm ngoái học lớp 10, được bố mẹ ưu tiên sắm riêng cho hẳn một cái Mi-pha tha hồ tung hoành phá phách, tôi cũng chỉ đạp xe rong phố với những thằng bạn. Chưa từng bao giờ có một nữ nhi ngồi sau xe tôi, áp mình tin cậy vào tôi như thế này. Đây là lần đầu.`,
  },

    {
    type: "story",
    imageId: "chapter-18",
    label: "Chương 18",
    head: "Tiêu đề Chương 18",
    pg: 18,
    text: `Chiếc Phượng Hoàng nặng chịch mà chẳng nặng một chút nào. Tôi guồng cẳng đạp, bám theo vật trắng mập mờ của con đường, lên dốc, xuống dốc, quành rẽ, lạng tránh, lao rất nhanh và phanh giật cục. Giang ngồi vững và thật êm sau tôi. Thỉnh thoảng chúng tôi mới nói chuyện, mà chỉ Giang nói. Giang là trò Trưng Vương, vừa tốt nghiệp lớp 10 trong năm, hiện giờ đã là sinh viên của trường Tổng hợp. Nhà cô trong ngõ Chợ phố Khâm Thiên. Túp nhà ban nãy là bố cô mượn của một người quen ở thị trấn để đón cô lên ăn Tết cùng ông. Mẹ cô mất năm ngoái, anh trai thì mới vừa đi Bê tháng trước.`,
  },

    {
    type: "story",
    imageId: "chapter-19",
    label: "Chương 19",
    head: "Tiêu đề Chương 19",
    pg: 19,
    text: `\n\n- Tết ra chơi với bố con em, anh nhé. Nhà chỉ hai bố con mà cái thị trấn khỉ ho cò gáy này thì buồn ơi là buồn. Em sẽ nói khó để bố vào hẳn đơn vị đón anh. Rồi chúng mình xin phép bố lỉnh về Hà thành vài hôm. Bố em chiều em lắm, sẽ đồng ý thôi. Mà bố đã thuận thì nhất định thủ trưởng đơn vị anh cũng nhất trí.`,
  },

    {
    type: "story",
    imageId: "chapter-20",
    label: "Chương 20",
    head: "Tiêu đề Chương 20",
    pg: 20,
    text: `Chúng tôi chia tay ở chân đồi Gừng, đầu con đường mòn dẫn vào xóm Đượm nơi đơn vị tôi trú quân.
\n\n- Hay là Tết em trốn vào đây với anh?
\n\n Giang hỏi, và không hiểu sao lại thở dài.`,
  },

    {
    type: "story",
    imageId: "chapter-21",
    label: "Chương 21",
    head: "Tiêu đề Chương 21",
    pg: 21,
    text: `Tôi cứ đứng mãi ở ven đồi. Mặc dù không thể nhìn thấy gì trong màn đen dày đặc đêm cuối năm, tôi vẫn cứ nhìn mãi theo Giang. Chia tay, tôi đã không nói được một điều gì cả, đã không kịp ngỏ một lời nào. Cả địa chỉ của Giang nữa cũng không hỏi rõ. Chỉ biết Khâm Thiên, ngõ Chợ.`,
  },

    {
    type: "story",
    imageId: "chapter-22",
    label: "Chương 22",
    head: "Tiêu đề Chương 22",
    pg: 22,
    text: `Hai hôm sau, tối ngày 27 Tết, tiểu đoàn tôi nhổ neo rời Bãi Nai. Hành quân qua Thường Tín, lên tàu ngay, không có 15 ngày phép thông lệ của lính Bê dài. Đây là một đợt tăng cường rất lớn cho chiến trường. Cả một Sư cùng lúc lên đường gấp gáp tiến quân, vượt ngàn dặm Trường Sơn vào Nam. Vừa đặt chân lên đất Tây Nguyên đã vào ngay chiến dịch. Các đơn vị của Sư đoàn phiên hiệu khác đi nhưng vẫn giữ nguyên đội hình từ ngoài Bắc. Tiểu đoàn của tôi đánh trận mở màn, và đại đội của tôi là mũi chủ công.`,
  },

    {
    type: "story",
    imageId: "chapter-23",
    label: "Chương 23",
    head: "Tiêu đề Chương 23",
    pg: 23,
    text: `Trước giờ nổ súng, đích thân tham mưu trưởng sư xuống kiểm tra công tác chuẩn bị chiến đấu của chúng tôi. Mặc dù ông xuống “kiềng” cùng với một nhóm khá đông trợ lí và trinh sát, mặc dù ông cũng trang bị và nai nịt như mọi người, tiểu liên AK, dép đúc, mũ cối, áo lính tô châu, nhưng trong bóng rừng nhập nhoạng tôi vẫn nhận ra ông ngay. Ông chính là "ông bô" của Giang!`,
  },

    {
    type: "story",
    imageId: "chapter-24",
    label: "Chương 24",
    head: "Tiêu đề Chương 24",
    pg: 24,
    text: `Tôi toan lỉnh, song ông trông thấy tôi tức thì. “Kìa, Hùng, Hùng đấy hả Hùng!”. Giọng ông ngạc nhiên, mừng vui. Ông thân thiết xiết chặt tay tôi và không nén được, ông cảm động ôm lấy tôi. “Giang nó cứ nhắc cậu mãi, Hùng ạ. Nó cứ buồn vì không gặp lại được cậu trước khi chúng ta lên đường”. Ông bảo “Giờ đây Giang nó ở lại ngoài đó có một mình".`,
  },

    {
    type: "story",
    imageId: "chapter-25",
    label: "Chương 25",
    head: "Tiêu đề Chương 25",
    pg: 25,
    text: `Gặp gỡ trước giờ nổ súng tất nhiên là chỉ thoáng nhanh, chỉ kịp nói mấy câu thế thôi. Tôi thì không nói được gì cả. Tôi chỉ ấp úng. Cả cái tên Hùng do con gái ông phịa vội ra, tôi cũng không thể cải chính.
\n\nThời khắc gấp gáp không thể nấn ná, nhưng trước lúc đi, tham mưu trưởng sực nhớ một điều và vội vội ông nói với tôi: “Giang nó có gởi cháu tấm ảnh của nó, nhưng tiếc quá, lại không mang theo đây. Để bữa sau vậy, Hùng nhé..."`,
  },

    {
    type: "story",
    imageId: "chapter-26",
    label: "Chương 26",
    head: "Tiêu đề Chương 26",
    pg: 26,
    text: `Không có “bữa sau” ấy. Tôi không còn có dịp được gặp lại tham mưu trưởng. Cả tới mùa khô sau, được điều lên trinh sát sư đoàn, tôi vẫn không thể nào gặp lại được ông. Tham mưu trưởng của chúng tôi hy sinh vào cuối mùa khô năm đầu tiên sư đoàn chúng lôi lâm trận.`,
  },

    {
    type: "story",
    imageId: "chapter-27",
    label: "Chương 27",
    head: "Tiêu đề Chương 27",
    pg: 27,
    text: `Chiến tranh, đời lính, tuổi trẻ, mọi sự là như thế, chỉ thế thôi, thoảng nhanh. Thoảng nhanh nhưng không tắt lịm. Chỉ thế thôi nhưng để rồi sau này cứ nhớ mãi. Trở thành nỗi đau. Những nỗi đau mất mát âm thầm.`,
  },

    {
    type: "story",
    imageId: "chapter-28",
    label: "Chương 28",
    head: "Tiêu đề Chương 28",
    pg: 28,
    text: `Chắc là bây giờ Nhật Giang vẫn còn nhớ đến tôi, người lính trẻ vô danh hơn ba chục năm về trước. Tôi thì không bao giờ quên cô ấy, mặc dù thực ra là có gì đâu một tình cờ như thế, một gặp gỡ vẩn vơ, lưu luyến mơ hồ gần như không có thật mà năm tháng cuộc đời cứ mãi chồng chất lên muốn xoá nhoà.`,
  },

  // ===== BÌA SAU =====
  {
    type: "cover",
    
    imageId: "cover-back",  
    position: "back"
  },
  

];



let cur = 0;

function buildDots() {
  const c = document.getElementById("dots");
  c.innerHTML = PAGES.map(
    (_, i) =>
      `<div class="dot${i === cur ? " active" : ""}" onclick="goTo(${i})"></div>`,
  ).join("");
}

function render(idx) {
  const s = document.getElementById("spread");
  const p = PAGES[idx];

  if (p.type === "cover") {
    const isBack = p.position === "back";
    const btnText = isBack ? "Về đầu &larr;" : "Bắt đầu đọc &rarr;";
    const btnAction = isBack ? "goTo(0)" : "turn(1)";
    
    s.innerHTML = `
      <div class="cover-page ${p.imageId}" style="width:100%">
        <div class="bg-circle" style="width:300px;height:300px;top:-80px;right:-80px"></div>
        <div class="bg-circle" style="width:200px;height:200px;bottom:-50px;left:-50px"></div>
        <div class="bg-circle" style="width:90px;height:90px;top:42%;left:12%"></div>
        <div class="cover-overlay"></div>
        <div class="cover-content">
          
         
          <button class="cover-btn" onclick="${btnAction}">${btnText}</button>
        </div>
      </div>`;
  } else {
    const textHtml = p.text.replace(/\n\n/g, "<br><br>");
    s.innerHTML = `
      <div class="spine-line"></div>
      <div class="image-page">
        <div class="page-num-badge">Trang ${p.pg} / ${PAGES.length - 2}</div>
        
        
        <div class="image-container ${p.imageId}">
          
        </div>
        
      </div>
      <div class="text-page">
        <div>
          
          <p class="dropcap">${textHtml}</p>
        </div>
        <div class="text-footer">
          <span class="page-num-txt">— ${p.pg} —</span>
          <div class="spine-dots"><span></span><span></span><span></span></div>
          <span class="page-num-txt">Tủ Sách 10A1 ✦</span>
        </div>
      </div>`;
  }


  let navText;
  if (cur === 0) {
    navText = "Bìa trước";
  } else if (cur === PAGES.length - 1) {
    navText = "Bìa sau";
  } else {
    navText = `${cur} / ${PAGES.length - 2}`;
  }
  document.getElementById("navInfo").textContent = navText;
  
  document.getElementById("prevBtn").disabled = cur === 0;
  document.getElementById("nextBtn").disabled = cur === PAGES.length - 1;
  buildDots();
}

function turn(d) {
  const n = cur + d;
  if (n < 0 || n >= PAGES.length) return;
  goTo(n);
}

function goTo(idx) {
  const s = document.getElementById("spread");
  s.classList.add("turning");
  setTimeout(() => {
    cur = idx;
    render(cur);
    s.classList.remove("turning");
  }, 340);
}

// Keyboard navigation (Arrow keys)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") turn(1);
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") turn(-1);
});

// Touch/swipe support for mobile
let tx = 0;
document.addEventListener("touchstart", (e) => {
  tx = e.touches[0].clientX;
});
document.addEventListener("touchend", (e) => {
  const dx = tx - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 50) turn(dx > 0 ? 1 : -1);
});


render(0);


