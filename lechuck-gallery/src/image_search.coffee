window.lecheckApp.factory 'imageSearch', ['$http', ($http) ->
  (query, currentPage = 0, imagesPerQuery = 4) ->
    $http
      method: 'JSONP'
      url: "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=#{encodeURIComponent(query)}&callback=JSON_CALLBACK&start=#{currentPage * imagesPerQuery}"
]
