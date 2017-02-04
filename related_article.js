
$(function() {

	var blogUrl = ""; // ブログのURL
	var num = 4; // 記事表数
	var category = $('.entry-categories.categories a:first-child').text(); //カテゴリー名を取得
	var categoriUrl = "http://" + location.host + "/feed/category/" + category; //カテゴリーfeed取得

	// feedから記事を取得
	$.get(categoriUrl, function (data) {
		$(data).find("entry").each(function () {
			var el = $(this);

			var title = el.find('title').text(); //ブログタイトル
			var articleLink = el.find('link').attr('href'); //ブログタイトル
			var html = '<iframe class="embed-card embed-blogcard" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;" title="' + title + '" src="' + articleLink + '" frameborder="0" scrolling="no"></iframe>';

			$('#related_article').append(html);
		});
	});
});