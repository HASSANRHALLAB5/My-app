import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import * as _ from "lodash";
import { useParams } from "react-router";

const Api = "http://stage.whgstage.com/front-end-test/games.php";
function Landing() {
    const [posts, setPosts] = useState([]);
    const [games, setGames] = useState([]);
    const { category } = useParams();

    //console.log(category)
    //fetching api
    useEffect(() => {
        axios
            .get(Api)
            .then((res) => {
                if (category) {
                    const filterGames = res.data.filter((element) => element.categories.includes(category));
                    const elements = _.sampleSize(filterGames, 15);
                    setPosts(elements);
                   // console.log(elements)
                }

                setGames(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    //update page
    useEffect(() => {
        const refreshtime = setTimeout(function () {
            if (category) {
                const filterGames = games.filter((element) => element.categories.includes(category));
                const elements = _.sampleSize(filterGames, 15);
                setPosts(elements);
                //console.log(elements);
            }
        }, 5000);
        return () => {
            clearTimeout(refreshtime);
        };
    });

    return (
        <div data-testid="custom-element">
            <Container>
                <ul>
                    {posts.map((post) => (
                        <div key={post.name}>
                            <img src={post.image} alt="" />
                        </div>
                    ))}
                </ul>
            </Container>
        </div>
    );
}

export default Landing;

const Container = styled.div`
width: 90%;
margin: 50px auto;
    img {
        border-radius: 20px;
        height: 150px;
        width: 100%;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 20px;
    }

    @media (max-width: 1024px) { 
      ul {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
    @media (max-width: 768px) { 
      ul {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
`;
