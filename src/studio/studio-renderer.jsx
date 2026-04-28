import { useMemo } from "react";
import { personalizeSdk } from "@contentstack/personalize-edge-sdk";
import {
  useCompositionData,
  StudioComponent,
} from "@contentstack/studio-react";
import "./index";

export function StudioPageWithUidRenderer({ uid }) {
  const search = window.location.search;
  const variantAlias = useMemo(
    () => personalizeSdk?.getVariantAliases().join(",") || "",
    [],
  );
  const { specOptions, error, isLoading } = useCompositionData(
    {
      compositionUid: uid,
    },
    {
      ...(variantAlias && { variantAlias: variantAlias }),
    },
  );

  if (error !== null) {
    console.error("Error studio with uid renderer", error);
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <StudioComponent specOptions={specOptions} />;
}
