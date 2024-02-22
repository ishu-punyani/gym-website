import wheyProtein from './whey-protein.jpg'
import isolateProtein from './isolate-protein.jpg'
import creatine from './creatine.jpg'
import bcaa from './bcaa.webp'
import preWorkout from './preworkout.jpg'
import citrulline from './citrulline.webp'
import fatBurner from './fatBurner.webp'
import massGainer from './massGainer.jpg'

const data = {
    productData:[
        {
            id: 1,
            img: wheyProtein,
            title: 'Whey Protein',
            desc: '2.5kg whey contentrate | 24gm protein | 76 servings',
            price: 4000
        },
        {
            id: 2,
            img: isolateProtein,
            title: 'Isolate Protein',
            desc: '2.25kg whey isolate | 25gm protein | 55 servings',
            price: 5000
        },
        {
            id: 3,
            img: creatine,
            title: 'Creatine',
            desc: '300gm creatine monohydrate | 3gm pure creatine | 120 servings',
            price: 700
        },
        {
            id: 4,
            img: bcaa,
            title: 'BCAA',
            desc: '210gm bcaa | 7gm bcaa + electrolytes | 30 servings',
            price: 1200
        },
        {
            id: 5,
            img: preWorkout,
            title: 'Pre-Workout',
            desc: '100gm pre-workout | 10gm serving size | 10 servings',
            price: 900
        },
        {
            id: 6,
            img: citrulline,
            title: 'Citrulline Malate',
            desc: '120g citrulline malate | 4gm serving size | 30 servings',
            price: 600
        },
        {
            id: 7,
            img: fatBurner,
            title: 'Fat Burner',
            desc: '500mg concentrate | advanced fat burner | 60 capsules',
            price: 2500
        },
        {
            id: 8,
            img: massGainer,
            title: 'Mass Gainer',
            desc: '5kg mass gainer | 1251 calories | 30 servings',
            price: 3000
        }
    ]
}

export default data