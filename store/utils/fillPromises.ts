import type {
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/dist/query';
import type { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import type { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';

import { BlockTypes } from '@/shared/constants/blockTypes';
import { DEPTH } from '@/shared/constants/depth';
import { blocksSection } from '@/shared/constants/elementsProjection/blocksSection';
import { generalSection } from '@/shared/constants/elementsProjection/generalSection';
import { LIMIT } from '@/shared/constants/limit';
import type { Nullable } from '@/shared/types/generics';
import type { TagGeneratorValue } from '@/shared/types/tagsGenerator';
import { getEndpoint } from '@/shared/utils/getEndpoint';
import parseOtherTagGenerator from '@/shared/utils/parseOtherTagGenerator';
import parseTagGenerator from '@/shared/utils/parseTagGenerator';

import { ENDPOINTS } from '../api/testRequests/constants';
import getRelatedArticlesEndpoint from '../api/testRequests/utils/getRelatedArticlesEndPoint';
import { ENDPOINTS as LAYOUT_ENDPOINTS } from '../api/layout/constants';
import type { BlockNeedsData } from '../types/blockNeedsData';

const fillPromises =
  (
    promises: MaybePromise<QueryReturnValue>[],
    lang: RegionCodename,
    fetchWithBQ: (
      arg: string | FetchArgs
    ) => MaybePromise<
      QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
    >
  ) =>
  (block: BlockNeedsData) => {
    if (
      BlockTypes.editorialWithThumnailsAutomatic === block._type ||
      BlockTypes.editorialBlock1Automatic === block._type ||
      BlockTypes.contentRailAutomatic === block._type ||
      BlockTypes.newsFeed === block._type
    ) {
      const tags = parseTagGenerator(
        block?.tags_generator?.tags_generator__main
      );
      const otherTags =
        parseOtherTagGenerator(block?.tags_generator?.tags_generator__other) ??
        undefined;
      const competitionTag = tags?.find(
        (tag) => typeof tag === 'object' && tag.type === 'competition'
      );
      const competitionOptaSdId =
        typeof competitionTag === 'object' ? competitionTag.optaSdId : null;

      const relatedArticlesEndPoint = getRelatedArticlesEndpoint(
        block,
        lang,
        tags,
        otherTags
      );

      block.competitionOptaSdId =
        block.competitionOptaSdId || competitionOptaSdId;

      promises.push(fetchWithBQ(relatedArticlesEndPoint));
    } else if (BlockTypes.competitionRail === block._type) {
      const relatedCompetitionsBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.competitionRail}`,
        DEPTH.four,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.competitionRail
        }
      );

      promises.push(fetchWithBQ(relatedCompetitionsBlockEndpoint));
    } else if (BlockTypes.teamRail === block._type) {
      const relatedTeamBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.teamRail}`,
        DEPTH.three,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.teamRail
        }
      );

      promises.push(fetchWithBQ(relatedTeamBlockEndpoint));
    } else if (BlockTypes.scoreboard === block._type) {
      const scoreboardBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.scoreboard}`,
        DEPTH.four,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.scoreboard
        }
      );

      promises.push(fetchWithBQ(scoreboardBlockEndpoint));
    } else if (BlockTypes.editorialBlock1Manual === block._type) {
      const editorialBlockManualEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.editorialBlock1Manual}`,
        DEPTH.three,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.editorialBlock1Manual
        }
      );

      promises.push(fetchWithBQ(editorialBlockManualEndpoint));
    } else if (BlockTypes.h2hWithoutArticle === block._type) {
      const h2hWithoutArticleBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.h2hWithoutArticle}`,
        DEPTH.four,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.h2h
        }
      );

      promises.push(fetchWithBQ(h2hWithoutArticleBlockEndpoint));
    } else if (BlockTypes.editorialWithThumnailsManual === block._type) {
      const editorialWithThumnailsManualBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.editorialWithThumnailsManual}`,
        DEPTH.three,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.editorialWithThumbnailsManual
        }
      );

      promises.push(fetchWithBQ(editorialWithThumnailsManualBlockEndpoint));
    } else if (BlockTypes.contentRailManual === block._type) {
      const contentRailManualBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.contentRailManual}`,
        DEPTH.three,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.contentRailManual
        }
      );

      promises.push(fetchWithBQ(contentRailManualBlockEndpoint));
    } else if (BlockTypes.videoRailBlockManual === block._type) {
      const videoRailBlockManualBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.videoRailBlockManual}`,
        DEPTH.three,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.blockVideoRailManual
        }
      );

      promises.push(fetchWithBQ(videoRailBlockManualBlockEndpoint));
    } else if (BlockTypes.featuredVideoManual === block._type) {
      const featuredVideoManualBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.featuredVideoManual}`,
        DEPTH.three,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.featuredVideoManual
        }
      );

      promises.push(fetchWithBQ(featuredVideoManualBlockEndpoint));
    } else if (BlockTypes.followUs === block._type) {
      const followUsBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.followUs}`,
        DEPTH.two,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.followUs
        }
      );

      promises.push(fetchWithBQ(followUsBlockEndpoint));
    } else if (BlockTypes.optaWidgetFixtures === block._type) {
      const optaWidgetFixturesBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.optaWidgetFixtures}`,
        DEPTH.three,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.optaWidgetFixtures
        }
      );

      promises.push(fetchWithBQ(optaWidgetFixturesBlockEndpoint));
    } else if (BlockTypes.optaWidgetStandings === block._type) {
      const optaWidgetStandingsBlockEndpoint = getEndpoint(
        `${LAYOUT_ENDPOINTS.ITEMS}/${BlockTypes.optaWidgetStandings}`,
        DEPTH.four,
        lang,
        LIMIT.one,
        {
          'system.codename': block._codename,
          elements: blocksSection.optaWidgetStandings
        }
      );

      promises.push(fetchWithBQ(optaWidgetStandingsBlockEndpoint));
    } else if (BlockTypes.videoRailBlockAutomatic === block._type) {
      const videoCount = block.number_of_items || 1;
      const otherTags = parseOtherTagGenerator(
        block.tags_generator?.tags_generator__other
      );
      const otherTagsString = otherTags ? otherTags.join(',') : null;
      const mainTags = block.tags_generator?.tags_generator__main
        ? parseTagGenerator(block.tags_generator?.tags_generator__main)
        : null;
      const mainTagsIds: Nullable<string[]> = mainTags
        ? (
            mainTags.filter(
              (tag) => typeof tag !== 'string'
            ) as TagGeneratorValue[]
          ).map((tag) => tag.id)
        : null;
      const mainTagsString = mainTagsIds ? mainTagsIds.join(',') : null;
      const competitionTag = mainTags?.find(
        (tag) => typeof tag === 'object' && tag.type === 'competition'
      );
      const competitionOptaSdId =
        typeof competitionTag === 'object' ? competitionTag.optaSdId : null;

      const relatedVideoEndpoint = getEndpoint(
        ENDPOINTS.VIDEO,
        DEPTH.two,
        lang,
        videoCount,
        {
          order: 'elements.publication_date[desc]',
          elements: generalSection.videoItem
        },
        (mainTagsString
          ? `&elements.tags_generator__main[all]=${mainTagsString}`
          : '') +
          (otherTagsString
            ? `&elements.tags_generator__other[all]=${otherTagsString}`
            : '')
      );

      block.competitionOptaSdId = competitionOptaSdId;
      promises.push(fetchWithBQ(relatedVideoEndpoint));
    } else if (BlockTypes.featuredVideoAutomatic === block._type) {
      const tags =
        parseTagGenerator(block?.tags_generator?.tags_generator__main) || [];

      const mainTagsString = tags
        .filter((tag) => typeof tag !== 'string')
        .map((tag) => (tag as TagGeneratorValue)?.id)
        .join(',');

      const videosArticleEndpoint = getEndpoint(
        ENDPOINTS.VIDEO,
        DEPTH.three,
        lang,
        LIMIT.one,
        {
          elements: generalSection.videoItem
        },
        mainTagsString
          ? `&elements.tags_generator__main[all]=${mainTagsString}`
          : ''
      );

      promises.push(fetchWithBQ(videosArticleEndpoint));
    }
  };

export default fillPromises;
