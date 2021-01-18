from bs4 import BeautifulSoup
import requests

html = requests.get("https://www.infomoney.com.br/cotacoes/camil-caml3/").content
soup = BeautifulSoup(html, 'html.parser')
print(soup.find('div', class_="value").findAll("p")[0].text)

#html = requests.get("https://statusinvest.com.br/acoes/itsa3").content
#soup = BeautifulSoup(html, 'html.parser')
#print(soup.body.findAll('div',text='Dividend Yield'))
# for line in soup.findAll('strong', class_="value"):
#     for parent in line.parent:
#         if  parent:
#             print(parent)
#             print("---------------------------------")
            

