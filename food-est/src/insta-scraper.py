from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from bs4 import BeautifulSoup
import time
import os


def get_user_requirements():
    url = 'https://www.instagram.com/'
    username = "accounts/login"
    strings_to_search = ["food", "drinks", "snacks", "drink", "snack", "cookies", "cookie", "buns", "bun", "chocolate", "cake", "cakes", "pizza", "pizzas", "candies", "candy", "burger", "burgers", "sandwich", "sandwiches", "popcorn", "pie", "pies", "bakery", "fried", "baked", "cheese", "ham", "chicken", "coffee", "pastries", "tea"]
    #strings_to_search = ["food", "drinks", "snacks", "drink", "snack", "cookies", "cookie", "buns", "bun", "chocolate", "cake", "cakes", "pizza", "pizzas", "sandwich", "sandwiches", "popcorn", "pie", "pies", "bakery", "baked", "cheese", "coffee", "pastries", "tea"]
    url += str(username)
    get_links(url, strings_to_search)


# scrolls through the user page and gathers all the posts' links
def get_links(url, strings_to_search):
    links = []
    browser = webdriver.Chrome()
    browser.get(url)

    ig_phone = "ks.ivanova1989"
    ig_pass = "password1989"
    
    # log in the account
    #myElem = WebDriverWait(browser, 15).until(EC.visibility_of_element_located((By.XPATH, "//div[text()='Log in']")))
    #browser.find_element(By.XPATH, "//div[text()='Log in']").click() 
    myElem = WebDriverWait(browser, 15).until(EC.visibility_of_element_located((By.XPATH, "//input[@name='username']")))
    myElem.send_keys(ig_phone)
    browser.find_element(By.XPATH, "//input[@aria-label='Password']").send_keys(ig_pass)
    browser.find_element(By.XPATH, "//div[text()='Log in']").click() 

    #if there is a popup, press the button to get rid of it
    try:
        myElem = WebDriverWait(browser, 15).until(EC.visibility_of_element_located((By.XPATH, "//button[text()='Save information']")))
        browser.find_element(By.XPATH, "//button[text()='Save information']").click()
    except Exception:
        pass           

    myElem = WebDriverWait(browser, 15).until(EC.visibility_of_element_located((By.XPATH, "//button[text()='Turn On']")))
    browser.find_element(By.XPATH, "//button[text()='Turn On']").click()

    #browser.execute_script('window.scrollTo(0,200)')

    #myElem = WebDriverWait(browser, 15).until(EC.visibility_of_element_located((By.XPATH, "//div[text() = 'more']")))
    #browser.find_element(By.XPATH, "//div[text() = 'more']").click()

    #soup = BeautifulSoup(browser.page_source, 'html.parser')
    #captions = soup.find_all("h1")
    #caption_for_one_post = ' '.join([caption.text for caption in captions])
    #captions[5 : 8] = [''.join(captions[5 : 8])]
    #for caption in captions:
    #    print(caption.text)
    #print(caption_for_one_post)
    #browser.execute_script('window.scrollTo(0,200)')

    #element = browser.find_element(By.XPATH, "//article")
		
    #browser.executeScript("arguments[0].scrollIntoView();", element)
    #last_height = browser.execute_script("return document.body.scrollHeight")
    i = 1
    # usually about 3-4 posts are on the feed
    while i<6:
        source = browser.page_source
        data = BeautifulSoup(source, 'html.parser')
        # if there is more, press it
        try:
            myElem = WebDriverWait(browser, 15).until(EC.visibility_of_element_located((By.XPATH, "//div[text() = 'more']")))
            browser.find_element(By.XPATH, "//div[text() = 'more']").click()
        except Exception:
            pass

        # scrap captions 
        #account = data.find("href")
        captions = data.find_all("h1")
        #caption_for_one_post = ' '.join([caption.text for caption in captions])
        #body = data.find('body')
        #script = body.find('span')

        # attempt at stopping at "You've comlpetely caught up" element, failed
        '''
        try:
            browser.execute_script("window.scrollBy(0, 200);")
            #browser.find_element(By.XPATH, "//span[text() = 'You've completely caught up']")
            browser.find_element(By.XPATH, "//span[text() = 'You've completely caught up']")
            print("You go here?")
            break
        except Exception:
            pass
        '''

        # scroll to the next post
        try: 
            element = browser.find_element(By.XPATH, "//article["+str(i)+"]")
            #element = browser.find_element(By.XPATH, "//div")
            browser.execute_script("arguments[0].scrollIntoView();", element)
        except Exception:
            browser.execute_script("window.scrollBy(0, 700);")
            pass
        #last_height = browser.execute_script("return document.body.scrollHeight")
        #browser.execute_script("window.scrollBy(0, 900);")
        

        """try:
            script.findAll('a')
        except:
            print("Sorry! An unexpected error occurred. Please make sure you enter a valid username")
            break """
        
        
       #for caption in captions:
       #     if any(s in caption.text for s in strings_to_search):
       #         if (caption.text not in links):
       #             links.append(caption.text)

        for caption in captions:
            links.append(caption.text)

            
        """for link in script.findAll('a'):
            if re.match("/p", link.get('href')):
                to_add = 'https://www.instagram.com' + link.get('href')
                if to_add not in links:
                    links.append(to_add) """
        
        # allow time to load the page
        time.sleep(3)
        i+=1
        #new_height = browser.execute_script("return document.body.scrollHeight")
        #if new_height == last_height:
        #    break
        #last_height = new_height

    print(len(links), "posts found")
    browser.close()

    #print(links)
    filter_captions(links, strings_to_search) 
    #write_to_file(links)



# this searches the string in the captions of all the posts
def filter_captions(links, strings_to_search):
    filtered_links = []
    # add captions that contain words of interest to the resulting array
    for link in links:
            if any(s in link.lower() for s in strings_to_search):
                if (link not in filtered_links):
                    filtered_links.append(link)

    print(len(filtered_links), 'results founds')
    #for link in filtered_links:
    #    print(link)
    write_to_file(filtered_links)


# finally this stores the resulting captions in a txt file
def write_to_file(links):
    path = "./src"
    os.chdir(path)
    #file_name = input("What would you like to call the file:")
    file_name = "scraped_data_no_filter"
    #for link in links:
    #    link.replace("\ud83d\udc9c: ", "")


    filtered_links = links
    
    #with open("data2.json", 'w') as outfile:
    #    json.dump(filtered_links, outfile)
    #for item in filtered_links:
    #    f.write("%s\n" % item)
    #for item in filtered_links:
       # print(item+"\n")
    with open(f"{file_name}.txt", 'w') as f:
        for item in filtered_links:
            f.write("%s\n" % item)


# Main method
if __name__ == '__main__':
    get_user_requirements()