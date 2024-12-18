'use client';
import React, {useState} from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent  } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";


export default function Projects(){
    const projectData = [
        {
            image: '/work/2.png',
            category: 'next js',
            name: 'Inversol - Energia Solar',
            description: 'Empresa de energia solar',
            link: 'https://www.inversolenergiasolar.com.br/',
            github: '/'
        },
        {
            image: '/work/1.png',
            category: 'react js',
            name: 'Fischer Planejados',
            description: 'Montador de móveis',
            link: 'https://fischerplanejados.art/',
            github: '/'
        },
        {
            image: '/work/papagaio-site.png',
            category: 'next js',
            name: 'Restaurante Papagaio ',
            description: 'Restaurante e Churrasqueira típica de portugal',
            link: 'https://restaurantepapagaio.pt/',
            github: '/'
        },
    ]
    const uniqueCategories = ['all projects',
    ...new Set(projectData.map((item)=>item.category))];
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');
    const filteredProjects = projectData.filter(project => {
        //if category is all project, return all, else filter 
        return category === 'all projects'
        ? project
        : project.category === category;
    });
    return(
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-b xl:mb-16 text-center mx-auto">My Projects</h2>
                <Tabs defaultValue={category}>
                    <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark: border-none'>
                        {categories.map((category, index)=>{
                            return(
                                <TabsTrigger
                                onClick={()=> setCategory(category)}
                                className='capitalize w-[162px] md:auto'
                                value={category}
                                key={index}>
                                    {category}
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                    <div className="relative text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project, index)=>{
                            return(
                                <TabsContent value={category} key={index} >
                                    <ProjectCard project={project}/>
                                </TabsContent>
                            )
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}