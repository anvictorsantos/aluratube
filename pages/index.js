import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{ 
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
}

export default HomePage

const StyleHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        alignt-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyleHeader>
            {/* <img src="banner"></img> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.description}</p>
                </div>
            </section>
        </StyleHeader>
    )
}

function Timeline(propriedades) {
    const playlistNames = Object.keys(propriedades.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map(function (playlistName) {
                const videos = propriedades.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map(function (video) {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}