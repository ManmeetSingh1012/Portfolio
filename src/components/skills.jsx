export default function Skills()
{
   return(
      
    <div class="flex flex-col mt-28 mx-auto w-5/6">
        <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center items-center justify-center">
            <div className=" bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

            <img className = "w-16 h-16 "src="/src/assets/html.svg"></img>
            <span>HTML</span>
                
            </div>


             <div class="bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

            <img className = "w-16 h-16 "src="/src/assets/tail.svg"></img>
            <span>Tailwind CSS</span>
                
            </div>


            <div class="bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

            <img className = "w-16 h-16 "src="/src/assets/js.svg"></img>
            <span>Javascript</span>
                
            </div>


             <div class="bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

            <img className = "w-16 h-16 "src="/src/assets/react.svg"></img>
            <span>React</span>
                
            </div>


             <div class="bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

            <img className = "w-16 h-16 "src="/src/assets/node.svg"></img>
            <span>Nodejs</span>
                
            </div>



             <div class="bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

            <img className = "w-16 h-16 "src="/src/assets/express.svg"></img>
            <span>Express</span>
                
            </div>


             <div class="bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

            <img className = "w-16 h-16 "src="/src/assets/mongo.svg"></img>
            <span>MongoDB</span>
                

            </div>
            
            <div class="bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

<img className = "w-16 h-16 "src="/src/assets/ts.svg"></img>
<span>Typescript</span>
    
</div>


<div class="bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

<img className = "w-16 h-16 bg-black p-1"src="/src/assets/docker.svg"></img>
<span>Docker</span>
    
</div>

<div class="bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

<img className = "w-16 h-16 "src="/src/assets/aws.svg"></img>
<span>AWS</span>
    
</div>

<div class="bg-blue-500 text-white p-3 rounded-lg  items-center content-center flex flex-col">

<img className = "w-16 h-16 "src="/src/assets/android.svg"></img>
<span>Android</span>
    
</div>
        </div>
    </div>

   )
}