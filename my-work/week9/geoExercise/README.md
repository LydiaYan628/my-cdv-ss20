The visualization is not an ideal one.
1. The circle should be move along with the show title changing, as well as updating the corresponding country numbers.
2. I cannot successfully translate the country name between two datasets. The array contains the country name in latitude and longitude dataset can not recognize the country in netflix dataset.
3. Then I compromised and want to make the circle move between US and China, but it is not working too. I somehow cannot manage with the setInterval function. I should figure it out later.
4. In this visualization, the circle stays in China, which is not what I really want. I worked with the projection([lon,lat])[i] to try to let it recognize more lon and lat data, but failed. It seems that the projection doesn't recognize arrays. So I tried to give variables like lat0 lon0 lat1 lon1 to specific number, but again, messed up with the changing variable.
5. I keep most of the draft and the not working codes in the script.js file, in order to do further improvement.
